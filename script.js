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
let imageDice = document.querySelector(".image");

//gen a random number
function randomGenerator(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
const randomNum = randomGenerator(100);
console.log(randomNum);

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

playerArr.push(createPlayer("Alasamd", p1ScoreDisplayEl));
playerArr.push(createPlayer("Sabir", p2ScoreDisplayEl));

//roll the dice
rollBtnP1El.addEventListener("click", function (e) {
  rollFunction(e, playerArr);
  console.log("p1");
});

//observer DP
rollBtnP2El.addEventListener("click", function (e) {
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
  console.log("inside changve plater");
  for (const [index, player] of playerArr.entries()) {
    if (player.turn) {
      player.score += ranNum;
      player.rolledScore = ranNum;
      player.turn = false;
      console.log("inside if");

      //change UI
      changeUI(player);

      if (index === playerArr.length - 1) playerArr[0].turn = true;
      else {
        playerArr[index + 1].turn = true;
      }
    }
  }
}

// change respected player score
function changeUI(player) {
  if (player.score >= randomNum) {
    player.playerEl.textContent = player.score;

    //won
    //clear array
    //clear DOM
  } else {
    player.playerEl.textContent = player.score;

    //uI
  }
}

//clear the dom
function clearDOM(playerArr) {
  //clear
}

//clear arr

/*

 const para=`<p>adhahda</p>`
 el.appendChild(para)



 */
