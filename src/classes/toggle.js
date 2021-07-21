module.exports = class Toggle {
  constructor(commit) {
    this.commit = commit;
  }

  toggleTask(index, tasks) {
    this.tasks = tasks.map((task) => {
      if (task.index === index) {
        return {
          index: task.index,
          description: task.description,
          completed: !task.completed,
        };
      } return task;
    });
    return this.tasks;
  }
};
