/* eslint-disable no-restricted-syntax */
class Task {
  constructor(element) {
    this.listItem = element;
    this.todos = [];
  }

  init() {
    this.update();
    this.add("Don't forget Milk");
    this.add("Don't forget Cigaretes");
  }

  create(task) {
    this.li = document.createElement('li');
    this.li.innerHTML = `
      <div class="todo-item">
        <input type="checkbox" class="todo-check">
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
}

module.exports = Task;
