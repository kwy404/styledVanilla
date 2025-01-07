// Função para criar um componente estilizado
function createStyledComponent(tagName, elementType, defaultStyles = {}) {
    class StyledComponent extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({
                mode: 'open'
            });
            this.render();
        }

        static get observedAttributes() {
            return Object.keys(defaultStyles);
        }

        attributeChangedCallback() {
            this.render();
        }

        render() {
            const styles = {
                ...defaultStyles
            };
            for (const attr of this.attributes) {
                const attrName = attr.name;
                const attrValue = attr.value;
                if (attrValue.startsWith('$')) {
                    // Se o valor do atributo começar com $, use o valor do atributo como a chave para buscar o valor do atributo
                    const varName = attrValue.substring(1);
                    styles[attrName] = this.getAttribute(varName) || defaultStyles[attrName];
                } else {
                    styles[attrName] = attrValue;
                }
            }

            const styleString = Object.entries(styles)
                .map(([key, value]) => `${key}: ${value};`)
                .join(' ');

            this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: block;
              ${styleString}
            }
          </style>
          <${elementType} part="content">
            <slot></slot>
          </${elementType}>
        `;

            // Adiciona listeners de eventos
            this.addEventListeners();
        }

        addEventListeners() {
            for (const attr of this.attributes) {
                if (attr.name.startsWith('@')) {
                    const eventName = attr.name.substring(1);
                    const styleChanges = attr.value.split(';').reduce((acc, rule) => {
                        const [key, value] = rule.split(':').map(s => s.trim());
                        if (key && value) {
                            acc[key] = value;
                        }
                        return acc;
                    }, {});

                    this.addEventListener(eventName, () => {
                        Object.entries(styleChanges).forEach(([key, value]) => {
                            this.style[key] = value;
                        });
                    });
                }
            }
        }
    }

    customElements.define(tagName, StyledComponent);
}

// Adiciona um observador de mutação para aplicar estilos a novos elementos adicionados dinamicamente
function observeNewElements() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.tagName.includes('-COMPONENT')) {
                        // Re-renderiza o componente quando ele é adicionado dinamicamente
                        node.render && node.render();
                    }
                });
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Inicia o observador de novos elementos
document.addEventListener('DOMContentLoaded', () => {
    observeNewElements();
});