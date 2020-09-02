// Zadania JAVA SCRIPT
// Zaimplementuj funkcję, która odwróci przekazany do niej string.

/*
function reverseMe(input) {
  // Step 1. Use the split() method to return a new array
  var splitInput = input.split('');  // var splitString = "hello".split("");
  // Step 2. Use the reverse() method to reverse the new created array
  var reverseInput = splitInput.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]
  // Step 3. Use the join() method to join all elements of the array into a string
  var goalInput = reverseInput.join('');  // var joinArray = ["o", "l", "l", "e", "h"].join("");
  //Step 4. Return the reversed string
  return goalInput;
} */

function reverseMe(input) {
  if (typeof input == 'string'){
    return input.split('').reverse().join('');
  } else {
    throw Error(`Niestety podany parametr nie jest trypu STRING`);
  }
}

reverseMe('Acerek32');

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(reverseMe('a'), 'a');
verify(reverseMe('abc'), 'cba');
verify(reverseMe('Przeprogramowani'), 'inawomargorpezrP');
verify(reverseMe('Brawo!'), '!owarB');
verify(reverseMe('testo'), 'otset');

