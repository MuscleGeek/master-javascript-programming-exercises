let car = {
    model: "Toyota"
}

function getProperty(obj, key) {
  // your code here
  
  return obj[key];
}

let output = getProperty(car, '');
console.log(output); // --> 'value'
