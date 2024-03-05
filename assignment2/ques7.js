// All of the above questions from 3-6 needs to be done with arrow functions also

//Ques 3
const multiply=(a,b)=>{
    return a*b;
}
const calculate=(multiply)=>{
    return multiply(10,20);

}
console.log(calculate(multiply));


// Ques 4
const square =(x)=> x*x;
console.log(square(5));


//Ques 5
const sum=(a, b)=> {
    return a + b;
}
console.log(sum(4, 6));


//Ques 6
const checkEven=(x)=>{
    if(x%2==0){
     return true;
    }
    else{
     return false;
    }
 }
 console.log(checkEven(10));
 console.log(checkEven(15));