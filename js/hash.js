/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 14 - "Hashtagujesz"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję wyszukującą hashtagi w zdaniu
*
*
* Przykład:
* findTags('W 2020 #opanujeJS'); // => opanujeJS
* findTags('Za chwilę dodam #opanujeJS!'); // => opanujeJS
* findTags('Lubię tagować #yolo #love#happy #h3cker'); // => yolo, love, happy, h3cker
*
*/

function findTags(message) {

  return message.match(/#[a-z\d]+/gi).map(hash => hash.replace('#',''));
}

var str = "Is this all there is?";
var patt1 = /is/gi;
var result = str.match(patt1);
console.log(result);

var str2 = "The rain in SPAIN stays mainly in the plain";
var res = str2.match(/ain/g);
console.log(res);

var str3 = "Give 100%!";
var patt3 = /\D/g;
var result3 = str3.match(patt3);
console.log(result3);
/* Weryfikacja */

function test(message) {
  return message.match(/#[a-z\d]+/gi);  // 'W 2020 #opanujeJS' >> ["#opanujeJS"]
}

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(findTags('W 2020 #opanujeJS'), 'opanujeJS');
verify(findTags('Za chwilę dodam #opanujeJS!'), 'opanujeJS');
verify(findTags('Lubię tagować #yolo #love#happy #h3cker'), 'yolo, love, happy, h3cker');
