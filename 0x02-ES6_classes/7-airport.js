export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // getter for code
  get code() {
    return this._code;
  }

  // default string method
  toString() {
    return this._code;
  }
}
