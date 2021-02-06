let myObj = {

};

function addProperty(obj, key) {
  // your code here
    obj[key] = true;
    return obj;
}

addProperty(myObj,'myProperty');
console.log(addProperty(myObj.myProperty));