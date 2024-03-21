// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.
function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("Success");
        }, 2000);

    });
}
async function getAllData() {
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");
    await getData(2);
}

getAllData();
