// // 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)
function fetchData(url, callback) {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    })
    .then(data => {

      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });

}

const apiUrl = "https://jsonplaceholder.typicode.com/todos/3";
fetchData(apiUrl, (error, data) => {
  if (error) {
    console.log('Error', error);
  }
  else {
    console.log('Data', data);
  }
});

