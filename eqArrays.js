const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i< arr1.length; i++) {
      const val1 = arr1[i];
      const val2 = arr2[i];

        if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
    } else {
      //compare the values directly
      if (val1 !== val2) {
        return false;
      }
    }
  }

  return true;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

//New tests
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([1, [2, [3]]], [1, [2, [3]]]), true);
assertEqual(eqArrays([1, [2, [3]]], [1, [2, 3]]), false);