export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter and setter for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // method of display
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
