/**
 * @jest-environment jsdom
 */
import LocalStorageMock from '../__mock__/localStorageMock';

describe('constructor', () => {
  test('Create new localStorage mock object', () => {
    const expected = new LocalStorageMock();

    Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
    const result = window.localStorage;

    expect(result).toStrictEqual(expected);
  });

  describe('get item from Local storage', () => {
    test('Get key from localStorage mock and returns value', () => {
      const expected = new LocalStorageMock();
      expected.store = {
        tasks:
        JSON.stringify(
          [
            { index: 0, description: "Don't forget Cigars!", completed: false },
            { index: 1, description: "Don't forget Milk! Edited", completed: true },
            { index: 2, description: "Don't forget Cigars!", completed: false },
          ],
        ),
      };
      Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
      window.localStorage.store = {
        tasks:
        JSON.stringify(
          [
            { index: 0, description: "Don't forget Cigars!", completed: false },
            { index: 1, description: "Don't forget Milk! Edited", completed: true },
            { index: 2, description: "Don't forget Cigars!", completed: false },
          ],
        ),
      };
      const result = window.localStorage.getItem('tasks');

      expect(result).toStrictEqual(expected.store.tasks);
    });

    describe('setItem in local storage', () => {
      test('Set key in localStorage object adds key to it', () => {
        const expected = new LocalStorageMock();
        expected.store = {
          tasks:
        JSON.stringify(
          [
            { description: 'Task 1', completed: true, index: 1 },
            { description: 'Task 2', completed: false, index: 2 },
            { description: 'Task 3', completed: false, index: 3 },
          ],
        ),
        };
        Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });
        window.localStorage.setItem(
          'tasks',
          JSON.stringify(
            [
              { description: 'Task 1', completed: true, index: 1 },
              { description: 'Task 2', completed: false, index: 2 },
              { description: 'Task 3', completed: false, index: 3 },
            ],
          ),
        );
        const result = window.localStorage.store.tasks;
        expect(result).toStrictEqual(expected.store.tasks);
      });
    });
  });
});