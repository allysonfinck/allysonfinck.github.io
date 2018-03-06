console.log('hello');
console.log($);

const gridSquares = [];
// const meter = ['#bar1', '#bar2', '#bar3', '#bar4', '#bar5', '#bar6', '#bar7', '#bar8', '#bar9', '#bar10'];
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

//move ball right
const moveRight = ()=>{
  $('.ball').animate({left: '+=57px'});
}

//move ball left
const moveLeft = ()=>{
  $('.ball').animate({left: '-=57px'});
}

//determine strength of shot
const increaseStrength = ()=>{
  $('#bar1').css('box-shadow', '0px 0px 15px 5px rgba(255, 255, 190, .75)');

}

$(()=>{

  createGrid();
  randSquare();
  createBall();

  $('#rightButton').click(moveRight);
  $('#leftButton').click(moveLeft);
  $('#strengthMeter').click(increaseStrength);


});
