// 12.
// async function getData() {
//     setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
//  getData().then(function(data) {
//     console.log(data);
//  });

//Error: The setTimeout function return the Timeout object .So in this question the array is not returning the array value .
//Correcting code :

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([1, 2, 3, 4, 5]), 1000);
  });
}
getData().then(function (data) {
  console.log("data: ", data);
});
