/**
 * @jest-environment jsdom
 */

import Task from '../classes/task';

describe('Add and remove task', () => {
  test('Add new task', () => {
    const res = new Task();
    res.addTask("Don't forget Cigars!");

    expect(res.tasks.length).toBe(1);
  });
  test('Check equality', () => {
    const expected = [
      { index: 0, description: "Don't forget Cigars!", completed: false },
      { index: 1, description: "Don't forget Milk!", completed: false },
    ];
    const res = new Task();
    res.addTask("Don't forget Milk!");
    expect(res.tasks).toStrictEqual(expected);
  });
  test('Remove Task', () => {
    const expected = [
      { index: 0, description: "Don't forget Cigars!", completed: false },
    ];
    const res = new Task();
    res.deleteTask(1);
    expect(res.tasks).toStrictEqual(expected);
  });
});

describe('Second partTesting rest of Task functions', () => {
  test('Function for editing the task description', () => {
    const expected = [
      { index: 0, description: "Don't forget Cigars!", completed: false },
      { index: 1, description: "Don't forget Milk! Edited", completed: false },
    ];
    const res = new Task();
    res.addTask("Don't forget Milk!");
    res.editTask(1, "Don't forget Milk! Edited");
    expect(res.tasks).toStrictEqual(expected);
  });
  test('Function for updating an item\'s completed status.', () => {
    const expected = [
      { index: 0, description: "Don't forget Cigars!", completed: false },
      { index: 1, description: "Don't forget Milk! Edited", completed: true },
    ];
    const res = new Task();
    res.toggleTask(1);
    expect(res.tasks).toStrictEqual(expected);
  });
  test('Function for updating an item\'s index value upon drag/drop actions.', () => {
    const expected = [
      { index: 2, description: "Don't forget Cigars!", completed: false },
      { index: 1, description: "Don't forget Milk! Edited", completed: true },
      { index: 0, description: "Don't forget Cigars!", completed: false },
    ];
    const res = new Task();
    res.addTask("Don't forget Cigars!");
    res.sort(0, 2);
    expect(res.tasks).toStrictEqual(expected);
  });
  test('Clear all completed', () => {
    const expected = [
      { index: 2, description: "Don't forget Cigars!", completed: false },
      { index: 0, description: "Don't forget Cigars!", completed: false },
    ];
    const res = new Task();
    res.clearCompetedTasks();
    expect(res.tasks).toStrictEqual(expected);
  });
});