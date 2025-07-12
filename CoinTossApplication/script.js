const message = document.querySelector(".message");
const btns = document.querySelectorAll("button")
const coinArray = ["Heads", "Tails"];

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", tossCoin);
}

function tossCoin(e){
    console.log("Player: " + e.target.innerText);
    let computerToss = Math.floor(Math.random() * 2);
    console.log("Computer:" + coinArray[computerToss]);
}
