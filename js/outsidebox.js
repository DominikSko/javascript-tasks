/*
* Cel zadania
*------------
* Zaimplementuj funkcję, sprawdzającą czy pudełko jest puste.
*
*
*/

function thing(box) {

  const row = box.split('\n');
  //console.log(row);
  // row[1] bo pierwszy wers to same spacje
  const boxBegin = row[1].indexOf('*');
  //console.log(boxBegin);
  const boxEnd = row[1].length;

  // Funkcja map sprawdza każdy wers na obecność 'o' zwracając tablicę wartości bool,
  // Funkcja rozpoznaje kiedy element jest w środku zwracając false
  const check = row.map((e) => {

    // console.log(e.indexOf('o'), boxEnd)

    if (e.indexOf('o') >= boxEnd) return true  // wychodzi poza box
    else if (e.indexOf('o') <= boxBegin ) return true // jest przed boxem
    else if (e.indexOf('o') === -1) return true // nie ma w ogóle
    return false  // jest w środku

 })
 // Suma logiczna, zwraca true jeśli element jest w środku
 return !check.reduce((result,boolElement) => result && boolElement)

}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(thing(`
              *****
              *   *o
              *   *
              *****`), false);

verify(thing(`
              *****
              * o *
              *   *
              *****`), true);

verify(thing(`
              *****
              *   *
              *   *
              *****`), false);

verify(thing(`
              *****
           o  *   *
              *   *
              *****`), false);


verify(thing(`
              *****
              *   *
              *   *
              *****o`), false);

verify(thing(`
              *****
              *   *
              *o  *
              *****`), true);

verify(thing(`
              *****
              *   *
             o*   *
              *****`), false);

verify(thing(`
              ********
              *      *
             o*      *
              ********`), false);

verify(thing(`
              ********
              *    o *
              *      *
              ********`), true);

verify(thing(`
              ***************
              *    o        *
              *             *
              *             *
              *             *
              ***************`), true);

verify(thing(`
              ***************
        o     *             *
              *             *
              *             *
              *             *
              ***************`), false);
