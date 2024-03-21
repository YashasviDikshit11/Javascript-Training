// 7. for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 1000); }

//Solution
//Error is that var is global scoped

//Corrected code
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
