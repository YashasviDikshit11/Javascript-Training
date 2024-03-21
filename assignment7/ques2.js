// 2. Give an example of using multiple callback functions in a single function in JavaScript
const callbacks = (callback1, callback2) => {
    console.log("Excecuting callback1");
    callback1();
    console.log("Excecuting callback2");
    callback2();

}
const callback1 = () => {
    console.log("callback1 is excecuted");
}
const callback2 = () => {
    console.log("callback2 is excecuted");
}
callbacks(callback1, callback2);
