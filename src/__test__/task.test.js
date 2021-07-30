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