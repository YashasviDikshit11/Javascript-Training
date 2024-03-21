// Write a function expression that takes in another function as an argument
function multiply(a,b){
    return a*b;
}

function calculate(multiply){
    return multiply(10,20);

}
console.log(calculate(multiply));