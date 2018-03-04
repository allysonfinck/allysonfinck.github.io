console.log('hi!');
console.log($);

//make golf course
const createGrid = () =>{
  for (let i = 1; i < 100; i++){
  const $div = $('<div>').addClass('gridSquare').appendTo('#grid');
  }
}

//create and locate hole
const createHole = () =>{
  const $hole = $('<div>').addClass('hole').appendTo('body');
}

$(()=>{

  createGrid();
  createHole();
  
});
