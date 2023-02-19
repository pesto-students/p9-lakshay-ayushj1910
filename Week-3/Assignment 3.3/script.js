function createIncrement() {
    let count= 0;
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

console.log("count is still printed 0 because message variable is out of the increment function scope and hence does not change when function increment is called thrice")
