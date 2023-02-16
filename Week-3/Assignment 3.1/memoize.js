//Given reducer method:
function add(a, b) {
  return b === undefined ? a : a + b;
}

//Create a method called memoize such that:
const memoizeAdd = memoize(add);

console.time("test_1");
console.log(memoizeAdd(100, 100)); //returns 200
console.timeEnd("test_1");
console.log(memoizeAdd(100)); //returns 100
console.log(memoizeAdd(100, 200)); //returns 300
console.time("test_2");
console.log(memoizeAdd(100, 100)); //returns 200 without computing
console.timeEnd("test_2");

// Memoize function
function memoize(func) {
  const memory = new Map();

  return function (...args) {
    const key = JSON.stringify([...args]);

    if (memory.has(key)) {
      return memory.get(key);
    }
    const result = func(...args);
    memory.set(key, result);
    return result;
  };
}
