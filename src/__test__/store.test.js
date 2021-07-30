/**
 * @jest-environment jsdom
 */

import Store from '../classes/store';

test('Local storage get items', () => {
  const key = 'tasks';
  const data = [{ index: 1, description: 'New task', completed: false }];
  Store.add(key, data);
  expect(Store.get(key)).toEqual(data);
});

test('Local storage set items check length', () => {
  const key = 'tasks';
  const data = [{ index: 1, description: 'New task', completed: false }, { index: 2, description: 'New task 1', completed: true }];
  Store.add(key, data);
  expect(Store.get(key).length).toBe(2);
});
test('Local storage remove item', () => {
  const key = 'tasks';
  const data = [{ index: 1, description: 'New task', completed: false }, { index: 2, description: 'New task 1', completed: true }];
  Store.add(key, data);
  expect(Store.get(key).length).toBe(2);
  Store.remove(key);
  expect(Store.get(key)).toBe(undefined);
  expect(Store.add(key, data)).toEqual(Store.get(data));
});
