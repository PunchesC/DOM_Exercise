let redButton = document.getElementById("redButton");
let greenButton = document.getElementById("greenButton");
let blueButton = document.getElementById("blueButton");
let squareButton = document.querySelector(".grid");

redButton.addEventListener("click", turnSquareRed);
function turnSquareRed(e) {
  squareButton.addEventListener("click", turnRed);
  function turnRed(e){
    e.target.style.backgroundColor ="red";
  }
}

greenButton.addEventListener("click", turnSquareGreen);
function turnSquareGreen(e) {
  squareButton.addEventListener("click", turnGreen);
  function turnGreen(e){
    e.target.style.backgroundColor ="green";
  }
}

blueButton.addEventListener("click", turnSquareBlue);
function turnSquareBlue(e) {
  squareButton.addEventListener("click", turnBlue);
  function turnBlue(e){
    e.target.style.backgroundColor ="blue";
  }
}