module.exports = class Task {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [
    ];
  }

  bindTaskListChange(callback) {
    this.onTaskListChanged = callback;
  }

  commit(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onTaskListChanged(tasks);
    window.location.reload();
  }

  sort(curr, drop) {
    const current = this.tasks[curr];
    const replaced = this.tasks[drop];

    current.index = drop;
    replaced.index = curr;
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
};