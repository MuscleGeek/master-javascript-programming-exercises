function isOldEnoughToDrink(age){
    // your code here	
    this._age = age;
    return age >= 21 ? true : false;
}

console.log(isOldEnoughToDrink(23));