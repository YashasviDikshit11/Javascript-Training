// 8. Create a function that fetches data from multiple APIs in parallel and
//  then performs some operation on the combined data, using async/await.

const urls = ["https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/4", "https://jsonplaceholder.typicode.com/todos/2", "https://jsonplaceholder.typicode.com/todos/3"]

const result = async (urls) => {
const fetchedarray = urls.map((url) => {
    return fetch(url);
  });

let response = await Promise.all(fetchedarray);
  response = response.map((item, index) => {
    return item.json();
  });

response = await Promise.all(response);

const result = response.map((value) => {
    return value.title;
  })
  console.log(result);
}
result(urls);