const output = document.querySelector(".output");
const btn = document.querySelector("button");
const data = new Date();
let message;
let currentTime = data.getHours();

btn.addEventListener("click", showOutput);

function showOutput(){
    console.log("btn is click");
    console.log(data.getHours());

    if(currentTime > 17){
        message = "Its evening!"
        output.style.backgroundColor =  "green";
        output.style.color = "white";
    }else if(currentTime > 12){
        message = "Its afternoon!"
        output.style.backgroundColor =  "Blue";
        output.style.color = "red";
    }else if(currentTime > 0){
        message = "Its morning!"
        output.style.backgroundColor =  "orange";
        output.style.color = "black";
    }else{
        message = "Something went wrong!"
        output.style.backgroundColor =  "red";

    }
    output.innerHTML = `<h1>${message}</h1>`;
}