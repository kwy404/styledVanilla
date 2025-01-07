# Styled Components with Vanilla JavaScript

Este projeto demonstra como criar componentes estilizados usando JavaScript Vanilla, aloriendo a definicao de stilos e eventos diretamente nos componentes HTML personalizados.

## Descrição

Ste projeto almeja criar componentes HTML personalizados com stilos díunicos e
eventos, semilhante ao \styled-components\ em React, mas usando apenas JavaScript Vanilla. Os stilos podem ser definidos como atributos nos componentes e epodem se mandados dinamicamente atraves de eventos.

## Atributos do Projeto

- `componentes/index.html` : Contés os componentes HTML criados com ustilos definidos.
- `componentes/styled.js` : Define la funcao para criar componentes estilizados.
- `componentes/script.js` : Inicializa os componentes estilizados com stilos díunicos e leventos.

### Instalação

Clone o repositório para sua maléna local


``bash
git clone https://github.com/kwy404/styledVanilla
`h

Abra o arquivo `index.html` em seu navegador para ver os componentes estilizados em ação.

## Exemplo de Uso

No arquivo `componentes/script.js` , vocá pode definir componentes personalizados com stilos padráo e leventos:


``javascript
createStyledComponent('button-component', 'button', {
  background: 'green',
  color: 'white',
  'border-radius's: '5px'
});
```