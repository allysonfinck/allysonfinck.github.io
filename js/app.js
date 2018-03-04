console.log('hi!');
console.log($);

const gridSquares = [];

//make golf course and create array of square ids
const createGrid = () =>{
  for (let i = 1; i < 100; i++){
  const $div = $('<div>').addClass('gridSquare').attr('id', 'square' + i).appendTo('#grid');
  gridSquares.push(i);
  }
}

console.log(gridSquares);

//find random grid square
const randSquareId = () =>{
  console.log('#square' + Math.floor(Math.random()*(gridSquares.length)));
}

//create and locate hole
const createHole = () =>{
  const $hole = $('<div>').addClass('hole').appendTo('body');
}

$(()=>{

  createGrid();
  randSquareId();
  createHole();

});
