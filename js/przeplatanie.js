function zipIt(first, second) {
  if (typeof first && typeof second !== 'number') {
    console.log('To nie są numery');
  }
  const firstArr = first.toString().split('');
  const secondArr = second.toString().split('');
  const length = (firstArr.length > secondArr.length) ? firstArr.length : secondArr.length;
  let finallyArr = [];
  for (let i = 0; i < length; i++) {
    finallyArr.push(firstArr[i]);
    finallyArr.push(secondArr[i]);
  }
  return finallyArr.join('');
}

/* Weryfikacja */

function verify(input, goal) {
if (input === goal) {
  console.log('Gratulacje!');
} else {
  console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
}
}

verify(zipIt(111, 222), '121212');
verify(zipIt(123, 456), '142536');
verify(zipIt(12, 5555), '152555');
