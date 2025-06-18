const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("hello", "hello");
assertEqual(6, 6);
assertEqual("Priya", "Priya");
assertEqual(3, 8);