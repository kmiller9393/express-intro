let helloButton = document.querySelector('.hello-button');
let pageHeader = document.querySelector('h1');

helloButton.addEventListener('click', logHello);

function logHello(e) {
  e.preventDefault();
  console.log('HELLO THERE!');
  pageHeader.innerText = 'My Static File Has Changed!';
}
