/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 9 - "Fabryka"
*/

/*
* Cel zadania
*------------
* Zmodyfikuj funkcję factory w taki sposób, aby zmienna quote była dostępna jako właściwość.
*/

function factory() {
  const quote_private = 'Cool!';
  return {
    quote : quote_private
  };
}

function factory1(){
  return {
    quote : 'Cool!'
  };
}

verify(factory().quote, 'Cool!');
verify(factory1().quote, 'Cool!');

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}
