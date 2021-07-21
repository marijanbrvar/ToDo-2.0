/* eslint-disable no-unused-vars */
import './style.css';
import Task from './classes/task';
import View from './classes/view';
import Dnd from './classes/dnd';
import Toggle from './classes/toggle';

class App {
  constructor(task, view, dnd, toggle) {
    this.task = task;
    this.view = view;
    this.dnd = dnd;
    this.toggle = toggle;

    this.task.bindTaskListChange(this.onTaskListChanged);
    this.view.bindAddTask(this.handleAddTask);
    this.view.bindToggleTask(this.handleToggleTask);

    this.onTaskListChanged(this.task.tasks);

    this.dnd.sort(this.hendleDndTask);
    // this.sort = this.dnd.sort();
  }

  onTaskListChanged = (tasks) => {
    this.view.displayTasks(tasks);
  }

  handleAddTask = (taskText) => {
    this.task.addTask(taskText);
  }

  handleToggleTask = (id) => {
    const toggle = this.toggle.toggleTask(id, this.task.tasks);
    this.task.commit(toggle);
  }

  hendleDndTask = (currentpos, droppedpos) => {
    this.task.sort(currentpos, droppedpos);
  }
}

const app = new App(new Task(), new View(), new Dnd(), new Toggle());
