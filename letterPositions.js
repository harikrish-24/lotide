
  //eqArrays function
const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};
  //assertArraysEqual function
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};
  //added letterPositions function
const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) { 
        const letter = sentence[i];
        if (letter !== ' ') { 
            if (!results[letter]) {
                results[letter] = [];
            }
            results[letter].push(i);
        }
    }
    return results;  
};

const testString = "hello";

const result = letterPositions(testString);

assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['o'], [4]);
