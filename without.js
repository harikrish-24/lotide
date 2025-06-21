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


const without = function(source, itemsToRemove) {
    const result = [];
 for (let item of source) {
    if (!itemsToRemove.includes(item)) {
        result.push(item);
    }
 }
 return result;
}


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); 
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);