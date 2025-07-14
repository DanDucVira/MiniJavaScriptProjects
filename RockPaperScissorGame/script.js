const message = document.querySelector(".message");
const score = document.querySelector(".score");
const btns = document.querySelectorAll("button");
let winner = [0, 0];

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", gamePlay);
}

function gamePlay(e) {
  let playerSelection = e.target.innerText;
  let computerSelection = Math.floor(Math.random() * 3);

  if (computerSelection === 0) {
    computerSelection = "Rock";
  } else if (computerSelection === 1) {
    computerSelection = "Paper";
  } else if (computerSelection === 2) {
    computerSelection = "Scissors";
  } else {
    computerSelection = "Something went wrong!";
  }

  console.log(playerSelection, computerSelection);
  let result = checkWinner(playerSelection, computerSelection);
  console.log(result);
  if (result == "Player") {
    result += "Wins!";
    winner[0]++;
  } else if (result == "Computer") {
    result += "Wins!";
    winner[1]++;
  }
  score.innerHTML = `Player:${winner[0]} Computer:${winner[1]}`
  message.innerHTML = `<h1>${checkWinner(playerSelection, computerSelection)}</h1>`
}

function checkWinner(player, computer) {
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    return "Player";
  } else if (
    (player === "Rock" && computer === "Rock") ||
    (player === "Paper" && computer === "Paper") ||
    (player === "Scissors" && computer === "Scissors")
  ) {
    return "Draw";
  } else {
    return "Computer";
  }
}
