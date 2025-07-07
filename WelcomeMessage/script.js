const btn = document.querySelector("button");
const output = document.querySelector(".output");
const input = document.querySelector("#input");
console.log(btn);

btn.addEventListener("click", showMessage);

function showMessage(){
    
    output.innerHTML = `<h1>Welcome! ${input.value} to my website</h1>`
    console.log(output);
}