let squareClicked = document.querySelector('.grid');
let squareCells = document.querySelectorAll('.cell');
// let turnYellow = document.querySelectorAll(".green");

squareClicked.addEventListener('click', turnSquare);
function turnSquare(e) {
  if (e.target.id ==='it') {
    e.target.classList.add('red');
    for (let greenSquare of squareCells) {
      if (greenSquare.classList.contains('green')) {
        greenSquare.classList.add('yellow');
      }

     
    }
  }

  // // else if(e.target.classList.contains("it")){
  // //   e.target.classList.add("red");

  // }
  else {
    e.target.classList.add('green');
  }
}
