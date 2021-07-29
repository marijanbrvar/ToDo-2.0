/**
 * @jest-environment jsdom
 */

import Task from '../classes/task';

describe('Add and remove task', () => {
  test('Add new task', () => {
    // const expected = [
    //   { index: 1, description: "Don't forget Grapes!", completed: false },
    //   { index: 2, description: "Don't forget Milk!", completed: true },
    // ];

    const expected = [{ index: 0, description: "Don't forget Cigars!", completed: false }];
    const res = new Task();
    res.addTask("Don't forget Cigars!");
    // console.log(res.tasks);

    expect(res.tasks.length).toBe(1);
    expect(res.tasks).toStrictEqual(expected);
  });
});