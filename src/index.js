/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import './style.css';
import Task from './classes/task';
import View from './classes/view';

class App {
  constructor(task, view) {
    this.task = task;
    this.view = view;

    this.view.bindAddTask(this.handleAddTask);
    this.task.bindTaskListChange(this.onTaskListChanged);

    this.onTaskListChanged(this.task.tasks);
  }

  onTaskListChanged = (tasks) => {
    this.view.displayTasks(tasks);
  }

  handleAddTask = (taskText) => {
    this.task.addTask(taskText);
  }
}

const app = new App(new Task(), new View());
