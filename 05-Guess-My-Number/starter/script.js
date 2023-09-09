'use strict';

// console.log(document.querySelector('.message').textContent);

//

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector(".guess").value = 23
// console.log(document.querySelector(".guess").value)
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // console.log(typeof guess)

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = String(score);
      document.querySelector('.message').textContent =
        'looser your guess was too high 👎';
    } else {
      document.querySelector('.message').textContent =
        'You lost the game, like always🙅🏿‍♂️ ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = String(score);
      document.querySelector('.message').textContent =
        'your guess is too low ⬇️';
    } else {
      document.querySelector('.message').textContent =
        'You lost the game, like always🙅🏿‍♂️ ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
