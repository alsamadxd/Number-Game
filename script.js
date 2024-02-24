"use strict";

// // document.querySelector(".P1").textContent = "bueno";

// let p1Score = 0;
// let p2Score = 0;

// let scoreP1 = document.querySelector(".player1-score");
// let scoreP2 = 0;
// let image = document.querySelector(".image");

// // rollthe dice
// const diceValue = function diceRoll() {
//   if (p1Score < 100 && p2Score < 100) {
//     const diceVal = Math.floor(Math.random() * 6) + 1;
//     image.src = `public/inverted-dice-${diceVal}.png`;
//     p1Score += diceVal;
//     scoreP1.textContent = `${p1Score}`;

//     console.log(diceVal);

//     return diceVal;
//   }
// };
// // console.log(diceValue());

// // change the image

// // diceRoll();
// // const checkEvent =
// // if (checkEvent) {
// //   diceRoll;
// //   console.log(diceRoll);
// // }

// const Btn = document.querySelector(".btn-p2");
// Btn.addEventListener("click", function () {
//   diceValue();
// });

//select the elements
let p1ScoreDisplayEl = document.querySelector(".player1-score");
let p2ScoreDisplayEl = document.querySelector(".player2-score");
const rollBtnP1El = document.querySelector(".btn-p1");
const rollBtnP2El = document.querySelector(".btn-p2");
// const resetGame = document.querySelector(".End");
let imageDice = document.querySelector(".image");
let targetScore = document.querySelector(".title");
let game = document.querySelector(".game");
let resetBody = document.querySelector(".reset-body");
let resetGame;

//gen a random number
function randomGenerator(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
let randomNum = randomGenerator(100);
console.log(randomNum);
targetScore.textContent = randomNum;

//array of players
const playerArr = [];

//

//creating players
function createPlayer(
  name,
  playerEl,
  score = 0,
  rolledScore = 0,
  turn = false
) {
  return {
    name,
    playerEl,
    score,
    rolledScore,
    turn,
  };
}

playerArr.push(createPlayer("Alasamd", p1ScoreDisplayEl, 0, 0, true));
playerArr.push(createPlayer("Sabir", p2ScoreDisplayEl));

//roll the dice
rollBtnP1El.addEventListener("click", function (e) {
  // Guard Clause
  if (!playerArr[0].turn) return;
  rollFunction(e, playerArr);
  console.log("p1");
});

//observer DP
rollBtnP2El.addEventListener("click", function (e) {
  // Guard Clause
  if (!playerArr[1].turn) return;

  rollFunction(e, playerArr);
  console.log("p2");
});

function rollFunction(e, playerArr) {
  //stop browser reloading
  e.preventDefault();

  //generate number
  const ranNum = randomGenerator(6);
  console.log(ranNum);
  imageDice.src = `public/inverted-dice-${ranNum}.png`;

  //change player
  changePlayer(playerArr, ranNum);
}

//change player
function changePlayer(playerArr, ranNum) {
  // Guard Clause
  let indexofPlayerArray;
  // console.log("inside changve plater");
  for (const [index, player] of playerArr.entries()) {
    if (player.turn) {
      // Guard Clause
      indexofPlayerArray = index;
      player.score += ranNum;
      player.rolledScore = ranNum;
      player.turn = false;
      // console.log(player.turn);
      // console.log("inside if");

      //change UI
      changeUI(player);
    }
  }
  // if (indexofPlayerArray >= playerArr.length - 1) {
  //   playerArr[0].turn = true;
  // } else {
  //   playerArr[indexofPlayerArray + 1].turn = true;
  // }
  if (indexofPlayerArray === 0) {
    playerArr[1].turn = true;
  } else {
    playerArr[0].turn = true;
  }
  // console.log(playerArr);
}

// change respected player score
function changeUI(player) {
  if (player.score >= randomNum) {
    player.playerEl.textContent = player.score;
    console.log(player.score);

    //won
    //clear array
    //clear DOM

    clearPlayerArray();

    clearDOM(playerArr);
  } else {
    player.playerEl.textContent = player.score;

    //uI
  }
}

function clearPlayerArray() {
  playerArr.pop();
  playerArr.pop();

  playerArr.push(createPlayer("Alasamd", p1ScoreDisplayEl, 0, 0, true));
  playerArr.push(createPlayer("Sabir", p2ScoreDisplayEl));
}

//clear the dom
function clearDOM(playerArr) {
  randomNum = randomGenerator(100);
  targetScore.textContent = randomNum;
  p1ScoreDisplayEl.textContent = 0;
  p2ScoreDisplayEl.textContent = 0;
  // game.remove();
  resetBody.removeChild(game);

  // const gameOver = document.createElement("section");
  const sec = document.createElement("section");
  sec.classList.add("End");

  const h1 = document.createElement("h1");
  h1.textContent = `Game Over`;

  const buttonReset = document.createElement("Button");
  buttonReset.textContent = `Reset`;
  buttonReset.classList.add("reset");

  // console.log("class added");
  sec.appendChild(h1);
  sec.appendChild(buttonReset);
  resetBody.appendChild(sec);

  // game.appendChild(gameOver);
  resetGame = document.querySelector(".reset");
  resetGame.addEventListener("click", function () {
    resetBody.removeChild(sec);
    // clearPlayerArray();
    // clearDOM(playerArr);
    // add main section
    console.log("clicked");
    resetBody.appendChild(game);
    // remove game over section
  });
}

//  add eventlister to restart the game

// const sec = document.createElement("section");
// sec.classList.add("End");
// const h1 = document.createElement("h1");
// const buttonReset = document.createElement("Button");
// buttonReset.textContent=`Reset`;
// sec.classList.add("reset");

// sec.appendChild(h1);
// sec.appendChild(buttonReset);
// game.appendChild(sec);
