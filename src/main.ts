const btn = document.querySelector('.check') as HTMLButtonElement;
const msg = document.querySelector('.message') as HTMLDivElement;
const inNum = document.querySelector('.guess') as HTMLInputElement;
const number = document.querySelector('.number') as HTMLDivElement;
const scoreElem = document.querySelector('.score') as HTMLSpanElement;
const body = document.querySelector('body') as HTMLBodyElement;
const again = document.querySelector('.again') as HTMLButtonElement;
const highScoreLabel = document.querySelector('.highscore') as HTMLSpanElement;
let score = 20;
let highscore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;

// number.textContent = randomNumber.toString();

btn.addEventListener('click', function () {
  const guess = parseInt(inNum.value);
  //No input
  if (!guess) {
    msg.textContent = '❌ Choose a correct number';

    //When player wins
  } else if (guess === randomNumber) {
    msg.textContent = ' 🎈 Correct number!!!';
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = randomNumber.toString();

    if (score > highscore) {
      highscore = score;
      highScoreLabel.textContent = String(highscore);
    }
    //When guess is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      msg.textContent = guess > randomNumber ? '☝ Too high' : '👇 Too low';
      score--;
      scoreElem.textContent = score.toString();
    } else {
      msg.textContent = '🤬 You lost the game!!!';
      scoreElem.textContent = '0';
    }
  }
});

again.addEventListener('click', function () {
  score = 20;
  scoreElem.textContent = String(score);
  msg.textContent = 'Start guessing...';
  number.textContent = '?';
  inNum.value = '0';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
});
