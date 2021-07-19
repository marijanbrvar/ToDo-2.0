/* eslint-disable no-unused-vars */
import './style.css';
import Task from './classes/taks';

const todoList = document.querySelector('#todoList');

const listBinding = new Task(todoList);
listBinding.init();
