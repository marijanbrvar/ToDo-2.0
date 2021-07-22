module.exports = class Toggle {
  constructor(commit) {
    this.commit = commit;
  }

  toggleTask(index, tasks) {
    this.tasks = tasks;
    const id = this.tasks.findIndex((item) => item.index === index);
    this.tasks[id].completed = !this.tasks[id].completed;
    return this.tasks;
  }
};
