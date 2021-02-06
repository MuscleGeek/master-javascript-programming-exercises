function isOldEnoughToDrive(age) {
  // your code here
    this._age = age;
    return this._age >= 16 ? true :false;
}

console.log(isOldEnoughToDrive(17));