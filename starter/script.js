'use strict';
const score0El = document.querySelector('.score');
const score1El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const currentScore0El = document.querySelector('#current--0');
const currentScore1EL = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const newBtn = document.querySelector('.btn--new');
// starting conditions-------------
let scores, currentScore, activePlayer;
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  dice.style.display = 'none';
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  document.querySelector('.current-score').textContent = 0;
  document.querySelector('.score').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  dice.style.display = 'none';
};
init();
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// click event on roll dice ---------
btnRoll.addEventListener('click', () => {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll);
  dice.src = `dice-${diceRoll}.png`;
  dice.style.display = 'block';
  // check for rolled ---------
  if (diceRoll !== 1) {
    // add roll to current score-
    currentScore += diceRoll;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch player
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
    // player1.classList.add('player--active');
  }
});
btnHold.addEventListener('click', () => {
  scores[activePlayer] += currentScore;
  // document.querySelector('.score').textContent = currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  // if there is a winner--------
  if (scores[activePlayer] >= 100) {
    console.log('Winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});
// resetting the game -------------------
newBtn.addEventListener('click', init);
