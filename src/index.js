/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import './style.css';

class Task {
  constructor() {
    this.tasks = [
      { index: 1, description: "Don't forget Milk!", completed: false },
      { index: 2, description: "Don't forget Cigaretes!", completed: true },
    ];
  }

  addTask(taskText) {
    const task = {
      index: this.tasks.length > 0 ? this.tasks[this.task.length - 1].index + 1 : 1,
      description: taskText,
      completed: false,
    };

    this.task.push(task);
  }
}

class View {
  constructor() {
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
        const taskItem = document.createElement('div');
        taskItem.className = 'todo-item';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
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
}
class App {
  constructor(task, view) {
    this.task = task;
    this.view = view;

    this.onTaskListChange(this.task.tasks);
  }

  onTaskListChange = (tasks) => {
    this.view.displayTasks(tasks);
  }
}

const app = new App(new Task(), new View());
