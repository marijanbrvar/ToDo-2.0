/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import './style.css';
import Task from './classes/task';
import View from './classes/view';
import Dnd from './classes/dnd';

const task = new Task();
const view = new View();
const dnd = new Dnd();

const displayTaskView = () => {
  view.displayTasks(task.tasks);
  view.bindAddTask(handleAddTask);
  view.bindDeleteTask(handleDeleteTask);
  view.bindToggleTask(handleToggleTask);
  view.bindClearCompletedTask(handleCompletedTask);
  view.bindEditTask(handleEditTask);
  dnd.sort(hendleDndTask);
};

displayTaskView();

function handleAddTask(taskText) {
  task.addTask(taskText);
  view.displayTasks(task.tasks);
}

function handleDeleteTask(id) {
  task.deleteTask(id);
  view.displayTasks(task.tasks);
}

function handleToggleTask(id) {
  task.toggleTask(id);
  view.displayTasks(task.tasks);
}

function handleCompletedTask() {
  task.clearCompetedTasks();
  view.displayTasks(task.tasks);
}

function hendleDndTask(currentpos, droppedpos) {
  task.sort(currentpos, droppedpos);
}

function handleEditTask(index, taskText) {
  task.editTask(index, taskText);
}