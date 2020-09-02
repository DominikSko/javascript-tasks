/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 5 - "Pangram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy podany parametr to tzw. pangram.
*
* Pangram to możliwe do zrozumienia zdanie wykorzystujące wszystkie litery danego alfabetu.
*
*
* Przykład:
*
* isPangram('test') // => false
* isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Zweryfikuj, czy konkretna litera występuje w podanym zdaniu tylko jeden raz.
*/

function isPangram(sentence) {
  const alfabet = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];

  let expression = [...sentence.toLowerCase()];

  for (let i = 0; i < alfabet.length; i++) {
    if ( !(expression.includes(alfabet[i])) ) {
      return false;
    }
  }

  return true;
}

isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!');

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isPangram('test'), false);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!'), true);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małże!'), false);
