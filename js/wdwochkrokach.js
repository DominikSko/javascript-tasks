function withPrefix(prefix) {
  if ( typeof prefix !== 'string') {
    throw new Error('parameter has to be type of string')
  }
  return function(name) {
    if ( typeof name !=='string') {
      throw new Error('parameter has to be type of string')
    }
    return `${prefix}${name}`
  };
}

const say = withPrefix('I Ty opanujesz JavaScript, ');
//console.log(say);
console.log(say('Dominik'));

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

const course = withPrefix('I ty Opanujesz JavaScript, ')
//console.log(course);

try {
  verify(course('Marta'), 'I ty Opanujesz JavaScript, Marta');
  verify(course('Janek'), 'I ty Opanujesz JavaScript, Janek');
} catch {
  console.log('Niestety :(')
}
