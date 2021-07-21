/* eslint-disable no-unused-vars */
import './style.css';
import Task from './classes/task';
import View from './classes/view';
import Dnd from './classes/dnd';

class App {
  constructor(task, view, dnd) {
    this.task = task;
    this.view = view;
    this.dnd = dnd;

    this.task.bindTaskListChange(this.onTaskListChanged);
    this.view.bindAddTask(this.handleAddTask);
    this.view.bindToggleTask(this.handleToggleTask);

    this.onTaskListChanged(this.task.tasks);

    this.dnd.sort();
  }

  onTaskListChanged = (tasks) => {
    this.view.displayTasks(tasks);
  }

  handleAddTask = (taskText) => {
    this.task.addTask(taskText);
  }

  handleToggleTask = (id) => {
    this.task.toggleTask(id);
  }
}

const app = new App(new Task(), new View(), new Dnd());
