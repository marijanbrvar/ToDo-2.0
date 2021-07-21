module.exports = class View {
  constructor() {
    this.form = document.querySelector('FORM');
    this.taskList = document.querySelector('#todoList');
    this.input = document.querySelector('input[name=todo]');
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
        const dragger = document.createElement('div', 'todo-drag');
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

        taskItem.append(checkbox, span);
        li.append(taskItem, dragger);
        this.taskList.append(li);
      });
    }
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
};