/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 19 - "Dopasuj nawiasy"
*/

/*
* Cel zadania
*------------
* Otrzymując stringa zawierającego nawiasy kwadratowe [], klamry {} lub nawiasy okrągłe (), upewnij się że wszystkie z par są dopasowane i prawidłowo zagnieżdżone. Jeżeli wszystko się zgadza, zwróć true. W przypadku wykrycia błędów, zwróc false.
*
* Przykład: '[{()}]' => true
* Przykład: '[{]}' => false
*/

function checkBrackets(stringWithBrackets) {
  const arrWithBrackets = [...stringWithBrackets]

  const asd = () =>{

  }
  for(let i = 0; i<arrWithBrackets.length; i++){
    if(arrWithBrackets[i] == "[" && (arrWithBrackets.indexOf("]")- i) % 2 == 0){
      return false
    }
    if(arrWithBrackets[i] == "{" && (arrWithBrackets.indexOf("}")- i) % 2 == 0){
      return false
    }
    if(arrWithBrackets[i] == "(" && (arrWithBrackets.indexOf(")")- i) % 2 == 0){
      return false
    }
  }
  return true

}

/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(checkBrackets("[{()}]"), true);
verify(checkBrackets("[{]}"), false);
verify(checkBrackets("()[{}]"), true);
verify(checkBrackets("{[(]}}"), false);
