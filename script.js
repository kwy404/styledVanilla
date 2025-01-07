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