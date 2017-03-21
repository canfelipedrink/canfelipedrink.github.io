const canFelipeDrink = false;

let stopTimer = null;

const felipeWillBeDrinking = 'March 22 2017';

function getRemainingTime() {
  const currentDate = Date.parse(felipeWillBeDrinking) - Date.parse(new Date());

  const seconds = Math.floor( ( currentDate / 1000 ) % 60 );
  const minutes = Math.floor( ( currentDate / 1000 / 60 ) % 60 );
  const hours = Math.floor( ( currentDate / ( 1000 * 60 * 60 ) ) % 24 );
  const days = Math.floor( currentDate / ( 1000 * 60 * 60 * 24 ));

  return {
    seconds,
    minutes,
    hours,
    days
  }
}

function renderTimer(node) {
  const remainingTime = getRemainingTime();

  if(remainingTime.days < 0) {
    document.querySelector('#no').remove();
    node.remove();
    appendToDiv(createH1('yes'));
    stopTimer();
  }

  const timerContent =  `${remainingTime.days} days - ` +
                        `${remainingTime.hours} hours - ` +
                        `${remainingTime.minutes} minutes - ` +
                        `${remainingTime.seconds} seconds`;
  node.innerText = timerContent;
}

function createH1(message) {
  const node = createHeader()

  node.innerText = message;

  node.id = message;

  return node;
}

function createHeader() {
  return document.createElement('h1');
}

function getDiv() {
  return document.querySelector('#CanFelipeDrink');
}

function appendToDiv(node) {
  const div = getDiv();
  div.append(node);
}

function generateRenderFunction() {
  const timerNode = document.createElement('p');

  getDiv().append(timerNode);
  return function() {
    renderTimer(timerNode);
  }
}

function main() {
  if(canFelipeDrink) {
    appendToDiv(createH1('yes'));
  }else {
    appendToDiv(createH1('no'));

    const interval = setInterval(generateRenderFunction(), 1000);

    stopTimer = function() {
      clearInterval(interval);
    }
  }
}

setTimeout(main, 200);
