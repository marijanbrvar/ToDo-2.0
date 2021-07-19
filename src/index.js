/* eslint-disable no-unused-vars */
import './style.css';
import Task from './classes/taks';
import Completed from './classes/completed';

const todoList = document.querySelector('#todoList');

// const listBinding = new Task(todoList);
// listBinding.init();

class App {
  constructor() {
    this.task = new Task(todoList);
    this.completed = new Completed();
  }

  init() {
    this.task.init();
    this.completed.init();
  }
}

const app = new App();
app.init();