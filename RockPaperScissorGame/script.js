const message = document.querySelector(".message");
const score = document.querySelector(".score");
const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", gamePlay);
}

function gamePlay(e) {
  console.log(e.target.innerText);
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

  console.log(computerSelection);
}
