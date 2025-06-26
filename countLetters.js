
//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// added countLetters function
const countLetters = function(sentences) {
  const results = {};

  //using loops
  for (const letter of sentences) {
    if (letter !== ' '){
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  } 
  return results;
} 
const result = countLetters("LHL");
assertEqual(result["L"], 2);
assertEqual(result["H"], 1);