module.exports = class Task {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [
      { index: 1, description: "Don't forget Milk!", completed: false },
      { index: 2, description: "Don't forget Cigaretes!", completed: true },
    ];
  }

  bindTaskListChange(callback) {
    this.onTaskListChanged = callback;
  }

  commit(tasks) {
    this.onTaskListChanged(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addTask(taskText) {
    const task = {
      index: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].index + 1 : 1,
      description: taskText,
      completed: false,
    };

    this.tasks.push(task);
    this.commit(this.tasks);
  }
};