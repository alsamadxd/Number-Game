"use strict";

// document.querySelector(".P1").textContent = "bueno";

let p1Score = 0;
let p2Score = 0;

let scoreP1 = document.querySelector(".player1-score");
let scoreP2 = 0;
let image = document.querySelector(".image");

// rollthe dice
const diceValue = function diceRoll() {
  if (p1Score < 100 && p2Score < 100) {
    const diceVal = Math.floor(Math.random() * 6) + 1;
    image.src = `public/inverted-dice-${diceVal}.png`;
    p1Score += diceVal;
    scoreP1.textContent = `${p1Score}`;

    console.log(diceVal);

    return diceVal;
  }
};
// console.log(diceValue());

// change the image

// diceRoll();
// const checkEvent =
// if (checkEvent) {
//   diceRoll;
//   console.log(diceRoll);
// }

const Btn = document.querySelector(".btn-p2");
Btn.addEventListener("click", function () {
  diceValue();
});
