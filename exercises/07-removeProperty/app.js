
let obj = {
    name: 'Sam',
    age: 20
};

function removeProperty(obj, key) {
  // your code here
    delete obj[key];
        return obj;    
}

let rmProp = removeProperty(obj,'age');
console.log(rmProp); // --> undefined