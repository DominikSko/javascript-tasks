/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 13 - "Izogram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję sprawdzającą czy podane słowo jest izogramem, czyli słowem
w którym każda litera występuje tylko jeden raz.
*
*
* Przykład:
* isogram('Izogram'); // => true
* isogram('Przeprogramowani'); // => false
*
*/

//function isogram(word) {
//  return word.length === new Set( [...word.toLowerCase()]).size;
//}

function isogram(word) {
  const single = [],
    repeated = [];

  [...word.toLowerCase()].forEach(key => {
    single.includes(key) ? repeated.push(key) : single.push(key)

  });
  return repeated.length == 0 ? true : false;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isogram('izogram'), true);
verify(isogram('Przeprogramowani'), false);
verify(isogram('SprawdzAm'), false);
