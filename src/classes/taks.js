/* eslint-disable no-restricted-syntax */
const LOCAL_STORAGE_JOB_LIST_KEY = 'tasks';
class Task {
  constructor(element) {
    this.listItem = element;
    this.todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_JOB_LIST_KEY)) || [];
  }

  init() {
    this.update();
    this.newTaskEventListener();
    // this.add("Don't forget Milk");
    // this.add("Don't forget Cigaretes");
  }

  create(task) {
    this.li = document.createElement('li');
    this.li.innerHTML = `
      <div class="todo-item">
        <input type="checkbox" class="todo-check" id="${task.index}">
        <p class="todo-text">${task.decription}</p>
      </div>
      <div class="todo-drag"><i class="bi bi-grip-vertical"></i></div>
    `;
    return this.li;
  }

  update() {
    while (this.listItem.firstChild) {
      this.listItem.removeChild(this.listItem.firstChild);
    }

    for (const description of this.todos) {
      this.listItem.appendChild(this.create(description));
    }

    localStorage.setItem(LOCAL_STORAGE_JOB_LIST_KEY, JSON.stringify(this.todos));
  }

  add(decription) {
    const task = {
      decription,
      completed: false,
      index: this.todos.length > 0 ? this.todos[this.todos.length - 1].index + 1 : 1,
    };

    this.todos.push(task);
    this.update();
  }

  newTaskEventListener() {
    this.form = document.querySelector('FORM');
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (e.target.addTodo.value !== '') {
        this.add(e.target.addTodo.value);
        this.form.reset();
      }
    });
  }

  static bindToggle(todoList) {
    this.todos = todoList;
  }
}

module.exports = Task;
