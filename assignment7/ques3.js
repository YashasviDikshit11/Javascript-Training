// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) 
// { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = null;
            if (err) {
                reject(err);
            } else {
                resolve("Data fetched successfully");
            }
        }, 1000);
    })
}
fetchData().then(data => { console.log(data) }).catch(err => { console.log(err) });


