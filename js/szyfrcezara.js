const caesar13 = str => {

  if (typeof str !== 'string' || !str) {
    return 'Give correct string!'
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const rot13 = 13;

  const encryptLetter = letter => alphabet[(alphabet.indexOf(letter.toLowerCase()) + rot13) % alphabet.length];

  const changeSign = sign => {
    if (/\d/.test(sign)) {
      return sign;
    }

    return sign === sign.toUpperCase()
      ? encryptLetter(sign).toUpperCase()
      : encryptLetter(sign);
  };

  return str.split('').map(changeSign).join('');
};


/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(caesar13('PRZEPROGRAMOWANI'), 'CEMRCEBTENZBJNAV');
