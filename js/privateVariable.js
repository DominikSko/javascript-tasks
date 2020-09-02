// how to create private variable in JavaScript

function secretVariable () {
  var private = 'super secret code';
  return function () {
    return private;

  };
}

var getPriaveVariable = secretVariable;

console.log(getPriaveVariable());
