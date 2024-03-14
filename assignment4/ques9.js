// Write a program to find the last duplicate index in an array

function lastDuplicate(arr)
{
  let result=arr.filter(function(val,index){
                return arr.indexOf(val)!==index;
            })
    console.log(result[result.length-1]);

}
let inputArray=[1,2,3,4,1,3,5];
lastDuplicate(inputArray);