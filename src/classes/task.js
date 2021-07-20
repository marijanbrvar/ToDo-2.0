module.exports = class Task {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [
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

  toggleTask(index) {
    this.tasks = this.tasks.map((task) => {
      if (task.index === index) {
        return {
          index: task.index,
          description: task.description,
          completed: !task.completed,
        };
      } return task;
    });
    this.commit(this.tasks);
  }
};