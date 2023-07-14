const obj = {
  firstName: "ayush",
};

function printName(age) {
  return this.firstName + " " + age;
}
// Bind creates a new function and takes arguments as well.
const printAyush = printName.bind(obj, 22);
console.log(printAyush());

// Call excutes the function immediately
//without having to create a new function
// and accepts arugments seperated by comma
console.log(printName.call(obj, 22));

//Apply exceutes the function immediately
// It accepts arguments in form of an array
function ExamResult(marks1, marks2, marks3) {
  return `${this.firstName} has got ${marks1} in maths, ${marks2} in science and ${marks3} in Bio`;
}
const marksarr = [8, 9, 10];
console.log(ExamResult.apply(obj, marksarr));
