import * as dom from './domUtil';

export default class View {
  constructor() {
    this.form = dom.queryElement(document, 'FORM');
    this.taskList = dom.queryElement(document, '#todoList');
    this.input = dom.queryElement(document, 'input[name=todo]');

    this.tempTaskDescription = '';
    this.initEditListener();
  }

  get taskText() {
    return this.input.value;
  }

  displayTasks(tasks) {
    while (this.taskList.firstChild) {
      this.taskList.removeChild(this.taskList.firstChild);
    }

    if (tasks.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'Nothing to do! Add a task?';
      this.taskList.append(li);
    } else {
      tasks.forEach((task) => {
        const li = document.createElement('li');
        li.id = task.index;
        li.draggable = true;
        const taskItem = document.createElement('div');
        taskItem.className = 'todo-item';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = task.index;
        checkbox.checked = task.completed;
        const dragger = document.createElement('div');
        dragger.className = 'todo-drag';
        dragger.innerHTML = '<i class="bi bi-grip-vertical"></i>';
        const span = document.createElement('span');
        span.contentEditable = true;
        span.classList.add('editable');

        if (task.completed) {
          const strike = document.createElement('s');
          strike.textContent = task.description;
          span.append(strike);
        } else {
          span.textContent = task.description;
        }

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('task-delete');
        deleteButton.id = task.index;
        deleteButton.innerHTML = '<i class="bi bi-trash"></i>';

        taskItem.append(checkbox, span);
        li.append(taskItem, dragger, deleteButton);
        this.taskList.append(li);
      });
    }
  }

  initEditListener() {
    this.taskList.addEventListener('keyup', (e) => {
      if (e.target.className === 'editable') {
        this.tempTaskDescription = e.target.innerText;
      }
    });
  }

  bindAddTask(handler) {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (this.taskText) {
        handler(this.taskText);
        this.form.reset();
      }
    });
  }

  bindToggleTask(handler) {
    this.taskList.addEventListener('change', (e) => {
      if (e.target.type === 'checkbox') {
        const id = parseInt(e.target.id, 10);

        handler(id);
      }
    });
  }

  bindEditTask(handler) {
    this.taskList.addEventListener('focusout', (e) => {
      const { id } = e.target.parentNode.parentNode;
      if (this.tempTaskDescription) {
        const index = parseInt(id, 10);
        handler(index, this.tempTaskDescription);
        this.tempTaskDescription = '';
      }
    });
  }

  bindDeleteTask(handler) {
    this.taskList.addEventListener('click', (e) => {
      const { id } = e.target.parentNode;
      if (e.target.parentNode.type === 'submit') {
        handler(id);
      }
    });
  }

  bindClearCompletedTask(handler) {
    this.clear = document.querySelector('.todo-clear');
    this.clear.addEventListener('click', () => handler());
  }
}