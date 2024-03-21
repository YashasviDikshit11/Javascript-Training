const limit = 4;

const callAPI = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const totalRequests = [];
for (let i = 1; i <= 10; i++) {
  const req = callAPI(`https://jsonplaceholder.typicode.com/posts/${i}`);

  totalRequests.push(req);
}

const rateLimiter = async () => {
  let currentToResolve = [];

  while (totalRequests.length > 0) {
    if (currentToResolve.length <= limit) {
      currentToResolve.push(totalRequests.shift());
    } else {
      const response = await Promise.all(currentToResolve);

      console.log(response);

      currentToResolve = [];

      currentToResolve.push(totalRequests.shift());
    }
  }

  if (currentToResolve.length > 0) {
    const response = await Promise.all(currentToResolve);

    console.log(response);
  }
};

rateLimiter();
