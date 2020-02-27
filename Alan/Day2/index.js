createTitle('h1', 'Todo v2');
createInput();
createButton();
createUl();
createListItem();

function createTitle(type, text) {
  const h1 = document.createElement(type);
  h1.innerHTML = text;
  document.body.prepend(h1);
}

function createInput() {
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.style.fontSize = '40px';
  input.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
      buttonClick();
    }
  });
}

function createButton() {
  const button = document.createElement('button');
  document.body.appendChild(button);
  button.innerHTML = 'ADD';
  button.style.fontSize = '40px';
  button.style.backgroundColor = '#aacfd0';
  button.addEventListener('click', buttonClick);
}

function buttonClick() {
  const input = document.querySelector('input');
  console.dir(input);
  console.log(input.value);
  const value = input.value;
  input.value = '';
  createListItem(value);
}

function createUl() {
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
}

function createListItem(text) {
  if (!text) {
    console.log('made it here instead');
    return;
  }
  console.log('made it!');
  const li = document.createElement('li');
  const ul = document.querySelector('ul');
  ul.appendChild(li);
  li.innerHTML = text;
  li.style.fontSize = '40px';
  li.style.listStyleType = 'circle';
}
