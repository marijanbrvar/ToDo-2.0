module.exports = class Task {
  constructor() {
    this.tasks = [
      { index: 1, description: "Don't forget Milk!", completed: false },
      { index: 2, description: "Don't forget Cigaretes!", completed: true },
    ];
  }

  addTask(taskText) {
    const task = {
      index: this.tasks.length > 0 ? this.tasks[this.task.length - 1].index + 1 : 1,
      description: taskText,
      completed: false,
    };

    this.task.push(task);
  }
};