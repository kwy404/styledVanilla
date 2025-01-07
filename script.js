// Criação dos componentes dinamicamente com variáveis de estilos e eventos

createStyledComponent('header-component', 'header', {
  color: 'black',
  background: '$background',
  padding: '10px'
});

createStyledComponent('box-component', 'div', {
  border: '1px solid gray',
  margin: '10px',
  padding: '10px'
});

createStyledComponent('button-component', 'button', {
  background: 'green',
  color: 'white',
  'border-radius': '5px'
});

createStyledComponent('card-component', 'div', {
  border: '1px solid black',
  padding: '10px',
  margin: '10px',
  background: 'white'
});

createStyledComponent('alert-component', 'div', {
  background: 'yellow',
  color: 'black',
  padding: '10px',
  'border-radius': '3px'
});

createStyledComponent('footer-component', 'footer', {
  background: 'darkblue',
  color: 'white',
  padding: '10px'
});

createStyledComponent('badge-component', 'span', {
  background: 'orange',
  color: 'white',
  padding: '5px 10px',
  'border-radius': '12px'
});

createStyledComponent('input-component', 'input', {
  border: '1px solid #ccc',
  padding: '10px',
  width: '200px'
});

createStyledComponent('progress-component', 'progress', {
  background: '#ddd',
  color: 'blue',
  height: '20px',
  width: '100%'
});

createStyledComponent('tooltip-component', 'span', {
  background: 'black',
  color: 'white',
  padding: '5px',
  'border-radius': '4px'
});

createStyledComponent('list-component', 'ul', {
  background: 'lightgreen',
  padding: '10px',
  border: '1px solid green'
});

createStyledComponent('menu-component', 'nav', {
  background: 'lightgray',
  padding: '15px',
  border: '1px solid gray'
});

createStyledComponent('quote-component', 'blockquote', {
  color: 'darkred',
  'font-style': 'italic',
  padding: '10px'
});

createStyledComponent('nav-component', 'nav', {
  background: 'navy',
  color: 'white',
  padding: '10px'
});

createStyledComponent('modal-component', 'div', {
  background: 'white',
  color: 'black',
  padding: '20px',
  'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)'
});

createStyledComponent('card-header-component', 'div', {
  background: 'lightgray',
  padding: '10px',
  'font-weight': 'bold'
});

createStyledComponent('card-body-component', 'div', {
  padding: '15px'
});

createStyledComponent('card-footer-component', 'div', {
  background: 'lightgray',
  padding: '10px',
  'text-align': 'right'
});