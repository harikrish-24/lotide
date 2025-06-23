const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i< arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);


const numbers = [1, 2, 3, 4];
const results2 = map(numbers, num => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8]);

const mixed = ['a', 'b', 'c'];
const results3 = map(mixed, char => char.toUpperCase());
assertArraysEqual(results3, ['A', 'B', 'C']);