const message = document.querySelector(".message");
const btns = document.querySelectorAll("button");
const coinArray = ["Heads", "Tails"];
let output;
let score = [0, 0];

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
  let playerGuess = e.target.innerText;
  console.log(playerGuess);
  let computerToss = Math.floor(Math.random() * 2);

  let computerGuess = coinArray[computerToss];
  message.innerHTML = `Computer Selected  ${computerToss} <br>`;
  console.log(computerGuess);

  if (playerGuess === computerGuess) {
    output = "Player Wins";
    //win
    score[0]++;
  } else {
    //loss
    output = "Computer Wins";
    score[1]++;
  }

  message.innerHTML = `${output} <br> Player ${score[0]} Computer ${score[1]}`;
}
