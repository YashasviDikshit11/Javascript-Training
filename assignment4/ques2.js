// Write a program to reverse a string ("Hello John" => "olleH nhoJ")
function rev(str){
    let ans='';
    for(let i=str.length-1;i>=0;i--){
        ans+=str[i];
    }
    return ans;
}
console.log(rev("Hello John ")); 