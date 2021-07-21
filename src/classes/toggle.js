module.exports = class Toggle {
  constructor(commit) {
    this.commit = commit;
  }

  toggleTask(index, tasks) {
    this.tasks = tasks;
    this.tasks[index].completed = !this.tasks[index].completed
    return this.tasks;
  }
};
