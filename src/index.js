/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import './style.css';
import Task from './classes/task';
import View from './classes/view';

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
