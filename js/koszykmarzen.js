const summaryValue = document.querySelector('.pr-4 span');
const amounts = document.querySelectorAll('input.w-10');
const removeButtons = document.querySelectorAll('.remove-button');
const currency = 'zł';
const showPurchasesButton = document.querySelector('.py-2');


const summary = () => {
  const prices = document.querySelectorAll('.price');
  const amounts = document.querySelectorAll('input.w-10');
  let sum = 0;
  amounts.forEach((amount, i) => {
    sum += amount.value * parseFloat(prices[i].textContent);
  })
  summaryValue.textContent = `${sum} ${currency}`;
  if (!prices.length) {
    emptyBasket()
    showPurchasesButton.remove();
  }
  return sum
}

const emptyBasket = () => {
  const emptyBasket = document.createElement('h1');
  emptyBasket.textContent = 'Twój koszyk jest pusty!';
  emptyBasket.style.fontSize = '20px';
  emptyBasket.style.color = 'red';
  document.querySelector('.flex-col').appendChild(emptyBasket);
}

const showPurchases = () => {
  const purchases = document.querySelectorAll('.px-5 h2');
  const winner = document.createElement('h1');
  const amounts = document.querySelectorAll('input.w-10');
  const items = [];
  purchases.forEach((purchase, i) => {
    if (amounts[i].value > 0) {
    items.push(purchases[i].textContent)
    }
  })
  winner.textContent = `Jesteś zwycięzcą !!! Kupiłeś ${items.join(' i ' )} !`;
  winner.style.color = '#4699E1';
  winner.style.fontSize = '20px';
  document.querySelector('.flex-col').innerHTML = '';
  document.querySelector('.flex-col').appendChild(winner);
  showPurchasesButton.remove();
}

amounts.forEach(amount => amount.addEventListener('change', summary));

removeButtons.forEach(removeButton => removeButton.addEventListener('click', () => {
  removeButton.parentElement.parentElement.remove()
  summary();
  }));

showPurchasesButton.addEventListener('click', () => {
  const sum = summary();
  if (!sum) {
    document.querySelector('.flex-col').innerHTML = '';
    emptyBasket();
    showPurchasesButton.remove();
  }
  else {
    showPurchases()
  }
});





