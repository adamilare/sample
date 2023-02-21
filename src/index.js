import './style.scss';

const tasks = [
  {
    description: 'Task 1',
    completed: false,
    index: 0,
  },
  {
    description: 'Task 2',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 2,
  },
  {
    description: 'Task 4',
    completed: false,
    index: 3,
  },
];

const todoList = document.getElementById('todo-list');

tasks.forEach((task) => {
  const listItem = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  const taskDescription = document.createElement('span');
  taskDescription.innerText = task.description;
  taskDescription.classList.add('task-description');

  const handle = document.createElement('span');
  handle.classList.add('material-symbols-outlined');
  handle.innerText = 'more_vert';

  listItem.append(checkBox, taskDescription, handle);
  todoList.appendChild(listItem);
});
