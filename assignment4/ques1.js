// Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")
function removeDuplicate(str){
    let s=str.split('');
    let unique_s=s.filter((item,index)=> s.indexOf(item)==index);
    return unique_s.join('');
    
}
console.log(removeDuplicate("Hello Yellow"));


// Logic 2

function removeDuplicate(str){
    const set = new Set();
    for(let ch of str){
        set.add(ch);

    }
    return set;
}
console.log(removeDuplicate("Hello Yellow"));