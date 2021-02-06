function isOldEnoughToVote(age) {
  // your code 
    this._age = age;

    return this._age >= 18 ? true : false;

}

let vote = isOldEnoughToVote(18);
console.log(vote);