// // 7. Create a function that performs multiple asynchronous operations in parallel 
// // using async/await and waits for all of them to complete before returning the results.
// async function performMultipleAsyncOPerations(operations) {

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