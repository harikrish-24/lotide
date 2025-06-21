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

const flatten = function(arr) {
   const result = [];

   for (let item of arr ){
   if (Array.isArray(item)) {
    for (let subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }

  return result;
};
   

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2], 3, 4, [5]]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([1, [2, 3], [4], 5]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
