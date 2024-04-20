const lightbulb1 = document.querySelector('#lightbulb1');
const lightbulb2 = document.querySelector('#lightbulb2');
const lightbulb3 = document.querySelector('#lightbulb3');

const subtitle = document.querySelector('.subtitle');

let count = 0;

lightbulb1.addEventListener('click', handleClick);
lightbulb2.addEventListener('click', handleClick);
lightbulb3.addEventListener('click', handleClick);

function handleClick() {
  count++;
  subtitle.textContent = `You've clicked the lights ${count} time${
    count === 1 ? '' : 's'
  }`;
  this.classList.toggle('active');
}
