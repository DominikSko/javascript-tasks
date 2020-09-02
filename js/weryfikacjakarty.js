/*
function checkLength(clearCardNumber) {

  if (clearCardNumber.length == 16 && clearCardNumber[0] == 5 && clearCardNumber[1] == 1 || clearCardNumber[0] == 5 && clearCardNumber[1] == 2 || clearCardNumber[0] == 5 && clearCardNumber[1] == 3 || clearCardNumber[0] == 5 && clearCardNumber[1] == 4 || clearCardNumber[0] == 5 && clearCardNumber[1] == 5 || clearCardNumber[0] == 2 && clearCardNumber[1] == 2) {

    return "MasterCard";


  } else if (clearCardNumber.length == 13 || clearCardNumber.length == 16 && clearCardNumber[0] == 4) {

    return "Visa";


  } else if (clearCardNumber.length == 15 && clearCardNumber[0] == 3 && clearCardNumber[1] == 4 || clearCardNumber[0] == 3 && clearCardNumber[1] == 7) {

    return "American Express";


  } else {

    return "Only Visa, Mastercard and American Express credit card checking is working!";

  }
}

function checkLuhn(clearCardNumber) {

  const countInTableOddNumbers = [];
  const countInTableEvenNumbers = [];


  if (clearCardNumber.length % 2 == 0) {

    clearCardNumber.forEach((el, index) => {
      if (index % 2 != 0) {
        countInTableEvenNumbers.push(parseInt(el));
      }
      if (index % 2 == 0) {
        countInTableOddNumbers.push(parseInt(el * 2));
      }
    });
  }

  if (clearCardNumber.length % 2 != 0) {

    clearCardNumber.forEach((el, index) => {
      if (index % 2 == 0) {
        countInTableEvenNumbers.push(parseInt(el));
      }
      if (index % 2 != 0) {
        countInTableOddNumbers.push(parseInt(el * 2));
      }
    });
  }


  const countInTableOddNumbersSplited = countInTableOddNumbers.toString().split(',').join('').split('');

  let totalCountOddNumbers = 0;

  for (const el of countInTableOddNumbersSplited) {
    totalCountOddNumbers += parseInt(el);
  }

  let totalCountEvenNumbers = 0;

  for (const el of countInTableEvenNumbers) {
    totalCountEvenNumbers += el;
  }

  return [totalCountOddNumbers + totalCountEvenNumbers] % 10 == 0;

} */


const cardsData = {
  'visa': {
    name: 'Visa',
    lengths: [13, 16],
    beginings: [4],
  },
  'masterCard': {
    name: 'Master Card',
    lengths: [16],
    beginings: [22, 51, 52, 53, 54, 55]
  },
  'americanExpress': {
    name: 'American Express',
    lengths: [15],
    beginings: [34, 37]
  },
  'discover': {
    name: 'Discover',
    lengths: [16],
    beginings: [60]
  },
  'dinersClub': {
    name: 'Diners Club',
    lengths: [14],
    beginings: [3]
  },
  'jcb': {
    name: 'JCB',
    lengths: [16],
    beginings: [35]
  },
}

const checkCardNumber = (inputUserNumber) => {
  if (inputUserNumber.length !== 0 && !parseInt(inputUserNumber)) {
    return 'use only digitals!';
  }
  if (inputUserNumber === '') {
    return 'empty input';
  }

  const inputValueToCalculation = prepareInputValueToCalculation(inputUserNumber);
  const isValidLuhnAlgorithm = checkLuhnAlgorithm(inputValueToCalculation);
  const cardCompany = checkCardCompany(inputUserNumber);
  if (isValidLuhnAlgorithm && cardCompany) {
    return cardsData[cardCompany].name;
  } else {
    return 'invalid card number!';
  }
}

function prepareInputValueToCalculation(inputUserNumber) {
  const userNumberArrayDigitals = inputUserNumber.match(/[0-9]/g);
  return userNumberArrayDigitals.reverse();
}

function checkLuhnAlgorithm(inputValueToCalculation) {
  let sum = 0;

  inputValueToCalculation.forEach((number, index) => {
    const digit = parseInt(number);
    if (index % 2) {
      let calculateValue = digit * 2
      sum += calculateValue < 10 ? calculateValue : calculateValueGreaterThan10(calculateValue)
    } else {
      sum += digit;
    }
  })
  return sum % 10 === 0 ? true : false;
}

function calculateValueGreaterThan10(value) {
  const separateDigits = String(value).split('');
  return separateDigits.reduce((sum, nextDigit) => sum + parseInt(nextDigit), 0);
}

function invalidInputValue() {
  return 'invalid card number!';
}

function checkCardCompany(cardNumber) {
  let finalResult = "";
  for (const company of Object.keys(cardsData)) {
    const lengthCondition = checkLength(cardNumber, company);
    const beginingCondition = checkBegining(cardNumber, company);
    if (lengthCondition && beginingCondition) {
      finalResult = company;
    }
  }
  return finalResult;
}

function checkLength(cardNumber, company) {
  let result = false;

  for (const length of cardsData[company].lengths) {
    if (cardNumber.length === length) {
      result = true;
      break;
    }
  }
  return result;
}

function checkBegining(cardNumber, company) {
  let result = false;
  for (const firstNumbers of cardsData[company].beginings) {
    if (String(cardNumber).startsWith(firstNumbers)) {
      result = true;
      break;
    }
  }
  return result;
}

console.log(`OK-test prawidłowego numeru -> "${checkCardNumber('378282246310005')}"`);
console.log(`OK-test prawidłowego numeru -> "${checkCardNumber('3566002020360505')}"`);
console.log(`OK-test prawidłowego numeru -> "${checkCardNumber('5105105105105100')}"\n`);

console.log(`Fail-test nieprawidłowego numeru -> "${checkCardNumber('51510515151')}"`);
console.log(`Fail-test braku podania numeru -> "${checkCardNumber('')}"`);
console.log(`Fail-test nieprawidłowe znaki -> "${checkCardNumber('aaa#$')}"`);
