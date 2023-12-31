const addButton = document.getElementById('add');
const input = document.getElementById('input');
const todoContainer = document.getElementById('todos');
const message = document.getElementById('message');

//Check 2 or more whitespace
const hasWhiteSpace = function (s) {
  return /\s{2,}/.test(s);
};

const messageLog = function (el) {
  let parEl = el.parentElement;
  message.textContent = `${parEl.textContent.slice(
    0,
    -1
  )}, removed from To-Do list!`;
};

const removeToDoElement = function (el) {
  let parentEl = el.parentElement;
  parentEl.remove();
  messageLog(el);
};

const createToDoTask = function () {
  if (!hasWhiteSpace(input.value)) {
    console.log(input.value);
    let listItem = document.createElement('li');

    let spanEl = document.createElement('span');
    spanEl.textContent = input.value;

    let buttonItem = document.createElement('button');
    buttonItem.textContent = 'X';

    todoContainer.appendChild(listItem);
    listItem.appendChild(spanEl);
    listItem.appendChild(buttonItem);

    buttonItem.onclick = function () {
      removeToDoElement(this);
    };
  }
};

//Alternative with innerHTML method
const addToDo = function () {
  todoContainer.innerHTML = `
    <li>
        <span>${input.value}</span>
        <button onclick="removeToDoElement(this)">X</button>
    </li>
    `;
};

addButton.addEventListener('click', createToDoTask);
