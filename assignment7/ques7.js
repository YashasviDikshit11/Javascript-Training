// // 7. Create a function that performs multiple asynchronous operations in parallel 
// // using async/await and waits for all of them to complete before returning the results.
// async function performMultipleAsyncOPerations(operations) {
//     const results = [];
//     for (const operation of operations) {
//         const result = await operation;
//         results.push(operation);

//     }
//     return results;
// }
// const operation1 = new Promise(resolve => setTimeout(() => resolve('Operation 1'), 1000));
// console.log("Operation 1 done");
// const operation2 = new Promise(resolve => setTimeout(() => resolve('Operation 2'), 3000));
// console.log("Operation 2 done");
// const operation3 = new Promise(resolve => setTimeout(() => resolve('Operations 3'), 6000));
// console.log("Operation 3 done");


// performMultipleAsyncOPerations([operation1, operation2, operation3])
//     .then(results => {
//         console.log("All operations performed");

//     })
//     .catch(error => {
//         console.log("Error occurred while performing operations:");
//     })

const asyncOP = (timer) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`${timer} time mei resolve ho gya`)
        }, timer)
    })
}

const multipleAsyncOp = async () => {
    const res = await Promise.all([asyncOP(2000), asyncOP(3000), asyncOP(5000)])
    console.log(res);
}

multipleAsyncOp();