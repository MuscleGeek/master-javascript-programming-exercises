// Write your function here
let obj = {
    key: [1,2,3]
};
/*Write a function called "getAverageOfElementsAtProperty"*/
function getAverageOfElementsAtProperty(obj, key)
{
    /*If the array at the given key is empty, it should return 0.*/
    /*If the property at the given key is not an array, it should return 0*/
    /*If there is no property at the given key, it should return 0*/  
if(!obj.hasOwnProperty(key)  || !Array.isArray(obj[key]) || obj[key].length === 0)
{
    return 0;
}

/*average all elem array*/ 
var avgArray = 0
for(let i = 0 ; i < obj[key].length; i++)
{
    avgArray += obj[key][i];
}
    return avgArray / obj[key].length;
}

var output = getAverageOfElementsAtProperty(obj,'key');
console.log(output);



