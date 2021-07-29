/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import './style.css';
import Task from './classes/task';
import View from './classes/view';
import Dnd from './classes/dnd';
import Toggle from './classes/toggle';

const task = new Task();
const view = new View();

const displayTaskView = () => {
  view.displayTasks(task.tasks);
  view.bindAddTask(handleAddTask);
  view.bindDeleteTask(handleDeleteTask);
};

displayTaskView();

// class App {
//   constructor(task, view, dnd, toggle) {
//     this.task = task;
//     this.view = view;
//     this.dnd = dnd;
//     this.toggle = toggle;

//     this.task.bindTaskListChange(this.onTaskListChanged);
//     this.view.bindAddTask(this.handleAddTask);
//     this.view.bindToggleTask(this.handleToggleTask);
//     this.view.bindDeleteTask(this.handleDeleteTask);
//     this.view.bindEditTask(this.handleEditTask);
//     this.view.bindClearCompletedTask(this.handleCompletedTask);

//     this.onTaskListChanged(this.task.tasks);

//     this.dnd.sort(this.hendleDndTask);
//     // this.sort = this.dnd.sort();
//   }

//   onTaskListChanged = (tasks) => {
//     this.view.displayTasks(tasks);
//   }

//   handleToggleTask = (id) => {
//     const toggle = this.toggle.toggleTask(id, this.task.tasks);
//     this.task.commit(toggle);
//   }

//   hendleDndTask = (currentpos, droppedpos) => {
//     this.task.sort(currentpos, droppedpos);
//   }

//   handleDeleteTask = (id) => {
//     this.task.deleteTask(id);
//   }

//   handleEditTask = (index, taskText) => {
//     this.task.editTask(index, taskText);
//   }

//   handleCompletedTask = () => {
//     this.task.clearCompetedTasks();
//   }
// }

function handleAddTask(taskText) {
  task.addTask(taskText);
  displayTaskView();
}

function handleDeleteTask(id) {
  task.deleteTask(id);
  displayTaskView();
}