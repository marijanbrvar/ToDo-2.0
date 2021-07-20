class Completed {
  constructor(todos) {
    this.todos = todos;
  }

  init(handler) {
    this.check = document.querySelectorAll('input[type=checkbox]');
    this.check.forEach((item) => {
      item.addEventListener('change', () => {
        const todo = this.todos.findIndex((todo) => todo.index === parseInt(item.id, 10));
        this.todos[todo].completed = !this.todos[todo].completed;
        handler(this.todos);
      });
    });
  }
}

module.exports = Completed;