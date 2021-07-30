export default class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(keyName) {
    return this.store[keyName] || null;
  }

  setItem(keyName, keyValue) {
    this.store[keyName] = keyValue;
  }
}