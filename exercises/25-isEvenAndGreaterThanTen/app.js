// Write your function here
function isEvenAndGreaterThanTen(word)
{
    return word%2 == 0 && word > 10 ? true : false; 
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); //--> false 
