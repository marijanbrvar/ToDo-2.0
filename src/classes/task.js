/* eslint-disable class-methods-use-this */
import Store from './store';

export default class Task {
  constructor() {
    this.tasks = Store.get('tasks') || [
    ];
  }

  commit(tasks) {
    Store.add('tasks', tasks);
  }

  sort(curr, drop) {
    const current = this.tasks[curr];
    const replaced = this.tasks[drop];

    this.tasks.splice(drop, 1, current);
    this.tasks.splice(curr, 1, replaced);
    this.commit(this.tasks);
  }

  addTask(taskText) {
    const task = {
      index: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].index + 1 : 0,
      description: taskText,
      completed: false,
    };

    this.tasks.push(task);
    this.commit(this.tasks);
  }

  editTask(index, updatedDescritpion) {
    const id = this.tasks.findIndex((item) => item.index === index);
    this.tasks[id].description = updatedDescritpion;

    this.commit(this.tasks);
  }

  deleteTask(index) {
    this.tasks = this.tasks.filter((task) => task.index !== parseInt(index, 10));
    const newTaskList = [];
    this.tasks.map((task, i) => {
      const newTask = {
        index: i,
        description: task.description,
        completed: task.completed,
      };
      return newTaskList.push(newTask);
    });

    this.commit(newTaskList);
  }

  toggleTask(index) {
    const id = this.tasks.findIndex((item) => item.index === index);
    this.tasks[id].completed = !this.tasks[id].completed;
    this.commit(this.tasks);
  }

  clearCompetedTasks() {
    this.tasks = this.tasks.filter((task) => task.completed !== true);
    this.commit(this.tasks);
  }
}