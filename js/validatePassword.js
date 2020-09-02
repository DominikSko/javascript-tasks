/*
function validatePassword(password) {
  if(password.length >= 3 && password.length <= 8) {
    return true;
  } else {
    return false;
  }
} */

/* function validatePassword(password) {
  let tempArray = password.split('');
  let check1 = false; //Ma długość od 3 do 10 znaków
  let check2 = false; //Zawiera jeden ze znaków specjalnych - !, @ lub #
  let check3 = false; //Zawiera cyfrę
  let passwordLength = password.length;

  if (typeof password == `string`){
    check1 = true ? passwordLength >= 3 && passwordLength <= 10 : false;

    tempArray.forEach(function(elem,index){
      if (elem == '!' || elem =='@' || elem == '#')
        check2 = true;
      else if (password.charCodeAt(index) >= 48 && password.charCodeAt(index) <= 57)
        check3 = true;
    });
  }
  else{
    throw Error(`Podana wartość nie jest stringiem`);
    return false;
  }

  //console.log(check1,check2,check3);

  //sprawdzam czy password spełnia wszystkie 3warunki
  return (check1 === true && check2 === true && check3 === true) ? true : false;
}
validatePassword('acerek321!'); */

function validatePassword(password) {
  if (typeof password !== 'string'){
    throw Error(`Podane Hasło jest niepoprawne`);
  }
  else if ((password.length >= 3 && password.length <= 10)&& password.match(/[0-9]/) && password.match(/[!/@/#]/)){
    return true;
  }
  else{
    return false;
  }
}
validatePassword('acerek321!');

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(validatePassword(''), false);
verify(validatePassword('lol'), false);
verify(validatePassword('ToDziala1#'), true);
