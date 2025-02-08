const btn = document.getElementById("btn");
const output = document.getElementById("output");
const input = document.getElementById("input");


btn.addEventListener("click", function(){
    let price = input.value;
    let tip = 0.15;
    tipPrice = price * tip;
  
    output.innerHTML = `The amount of tip you must give is ${tipPrice}`;
   
});