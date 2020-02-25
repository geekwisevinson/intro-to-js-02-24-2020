//targeting
const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('.list');

//listeners
button.addEventListener('click', addTodo);

input.addEventListener('keydown', function(e) {
  if (e.code === 'Enter') {
    addTodo();
  }
});

//functions doing stuff
function addTodo() {
  ul.innerHTML += '<li>' + input.value + '</li>';
  input.value = '';
}
