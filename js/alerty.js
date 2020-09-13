import {Alert} from './alert.js';

const addAlertButton = document.querySelector('.app-button');
addAlertButton.addEventListener('click', randomAlertGenerator);

const alertVariables = {
  alertNames: ['errorAlert', 'warningAlert', 'succesAlert'],
  msecToExpire: 10000,
  transition: 300,
  amountOfVisibleAlerts: 3,
  alertsQueue: [],
  alertConteiner: document.querySelector('.app-alert-conteiner'),
  existAlerts: document.querySelectorAll('.app-alert')
};

const alertObject = {
  errorAlert: new Alert('Error', 'red', 'Coś totalnie poszło nie tak.'),
  warningAlert: new Alert('Warning', 'yellow', 'Uważaj! To co robisz, nie jest ok!'),
  succesAlert: new Alert('Success', 'green', 'Cudownie! Działaj dalej :)')
};

const displayStartAlerts = () => {
  for(let index = 0; index < alertVariables.amountOfVisibleAlerts; index++){
    setTimeout(randomAlertGenerator, 500 * index + 500);
  }
};

function randomAlertGenerator() {
  const createdAlert = createAlert();
  const canAddAlert = checkCanAddAlert();

  if (canAddAlert) {
    addExpireOptions(createdAlert);
    renderAlert(createdAlert);
  } else {
    alertVariables.alertsQueue.push(createdAlert);
  }
}

const createAlert = () => {
  const randomIndex = Math.floor(Math.random() * alertVariables.alertNames.length);
  const alertDrawnName = alertVariables.alertNames[randomIndex];
  return alertObject[alertDrawnName].displayAlert();
};

const checkCanAddAlert = () => {
  updateExistAlerts();
  return alertVariables.existAlerts.length < alertVariables.amountOfVisibleAlerts;
};

const updateExistAlerts = () => {
  alertVariables.existAlerts = document.querySelectorAll('.app-alert');
};

const addExpireOptions = (alert) => {
  removeByExpire(alert);
  alert.addEventListener('click', removeByClick.bind(event, alert));
};

const removeByClick = (alert) => {
  alert.classList.add('removeAlertAnimation');

  setTimeoutActions(alert, alertVariables.transition);
};

const removeByExpire = (alert) => {
  setTimeout(() => {
    alert.classList.add('removeAlertAnimation');
  }, alertVariables.msecToExpire - alertVariables.transition)

  setTimeoutActions(alert, alertVariables.msecToExpire);
};

const setTimeoutActions = (alert, time) => {
  setTimeout(() => {
    alert.remove();
    addAlertFromQueue();
  }, time);
};

const renderAlert = (readyAlert) => {
  setTimeout(() => {
    readyAlert.classList.add('addAlertAnimation');
  }, alertVariables.transition*2)
  alertVariables.alertConteiner.appendChild(readyAlert);
};

const addAlertFromQueue = () => {
  const canAddAlert = checkCanAddAlert();

  if (alertVariables.alertsQueue.length && canAddAlert) {
    const alertFromQueue = alertVariables.alertsQueue.shift();
    addExpireOptions(alertFromQueue);
    renderAlert(alertFromQueue);
  }
};

displayStartAlerts();
