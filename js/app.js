console.log('hello');
console.log($);

const gridSquares = [];

//make golf course and create array of square ids
const createGrid = () =>{
  for (let i = 1; i <= 100; i++){
  const $div = $('<div>').addClass('gridSquare').attr('id', 'square' + i).appendTo('#grid');
  gridSquares.push(i);
  }
}

//create and locate hole
const randSquare = () =>{
  const randSquareId = '#square' + Math.floor(Math.random()*(gridSquares.length));
  const createHole = () =>{
    const $hole = $('<div>').addClass('hole').appendTo(randSquareId);
  }
  createHole();
}

//append golf ball
const createBall = () =>{
  const $ball = $('<div>').addClass('ball').appendTo('#ballContainer');
}

const moveRight = ()=>{
  $('.ball').animate({left: '+=57px'});
}

const moveLeft = ()=>{
  $('.ball').animate({left: '-=57px'});
}

$(()=>{

  createGrid();
  randSquare();
  createBall();

  $('#rightButton').click(moveRight);
  $('#leftButton').click(moveLeft);


});
