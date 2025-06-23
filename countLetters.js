const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
    const results = {};
    for (const letter of sentence) {
        if (letter !== " ") {
            if (results[letter]){
                results[letter] += 1;
            }else {
                results[letter] = 1;
            }
        }
    }
    return results;
};
console.log(countLetters("LHL"));
const result1 = countLetters("hello");
assertEqual(result1["h"], 1);
assertEqual(result1["e"], 1);
assertEqual(result1["l"], 2);
assertEqual(result1["o"], 1);

module.exports = countLetters;