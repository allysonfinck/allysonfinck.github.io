
//modal commands
const openModal = ()=>{
  $('#modal').css('display', 'block');
}

const closeModal = ()=>{
  $('#modal').css('display', 'none');
}

const gridSquares = [];
const meter = ['#bar1', '#bar2', '#bar3', '#bar4', '#bar5', '#bar6', '#bar7', '#bar8', '#bar9', '#bar10'];
let roundCount = 1;
let winCount = 0;
let loseCount = 0;

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
  const $ball = $('<div>').addClass('ball').appendTo('.container');
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
const increaseStrength = (event)=>{
  $(event.target).css('box-shadow', '0px 0px 15px 5px rgba(255, 255, 190, .75)');
}

//increase round
// const increaseRound = () =>{
//
//
// }

//check locations
const checkWin = () =>{
  const $ballLoc = $('.ball').offset();
  const $holeLoc = $('.hole').offset();
  console.log($('.container').offset());
  console.log($('#square71').offset());
  console.log($holeLoc);
  console.log($ballLoc);
  if ($holeLoc.top-7 <= $ballLoc.top &&
      $holeLoc.top+7 >= $ballLoc.top &&
      $holeLoc.left-7 <= $ballLoc.left &&
      $holeLoc.left+7 >= $ballLoc.left
    ) {
      console.log('win');
      restart();
      $('.roundNum').html('Round: ' + ++roundCount);
      $('.winNum').html('Wins: ' + ++winCount);
    } else {
      console.log('lose');
      restart();
      $('.roundNum').html('Round: ' + ++roundCount);
      $('.loseNum').html('Losses: ' + ++loseCount);
    }
}

//hitting ball according to strength meter
const hitBall = ()=>{
  if ($('#bar1').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-50px'}, 'slow');
  } else if ($('#bar2').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-114px'}, 'slow');
  } else if ($('#bar3').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-165px'}, 'slow');
  } else if ($('#bar4').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-220px'}, 'slow');
  } else if ($('#bar5').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-280px'}, 'slow');
  } else if ($('#bar6').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-335px'}, 'slow');
  } else if ($('#bar7').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-390px'}, 'slow');
  } else if ($('#bar8').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-451px'}, 'slow');
  } else if ($('#bar9').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-505px'}, 'slow');
  } else if ($('#bar10').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-560px'}, 'slow');
  }
  setTimeout(checkWin, 1000);
}

//start new round
const restart = () =>{
  $('.ball').remove();
  $('.hole').remove();

  if ($('#bar1').css('box-shadow') !== 'none'){
    $('#bar1').css('box-shadow', 'none');
  } else if ($('#bar2').css('box-shadow') !== 'none'){
    $('#bar2').css('box-shadow', 'none');
  } else if ($('#bar3').css('box-shadow') !== 'none'){
    $('#bar3').css('box-shadow', 'none');
  } else if ($('#bar4').css('box-shadow') !== 'none'){
    $('#bar4').css('box-shadow', 'none');
  } else if ($('#bar5').css('box-shadow') !== 'none'){
    $('#bar5').css('box-shadow', 'none');
  } else if ($('#bar6').css('box-shadow') !== 'none'){
    $('#bar6').css('box-shadow', 'none');
  } else if ($('#bar7').css('box-shadow') !== 'none'){
    $('#bar7').css('box-shadow', 'none');
  } else if ($('#bar8').css('box-shadow') !== 'none'){
    $('#bar8').css('box-shadow', 'none');
  } else if ($('#bar9').css('box-shadow') !== 'none'){
    $('#bar9').css('box-shadow', 'none');
  } else if ($('#bar10').css('box-shadow') !== 'none'){
    $('#bar10').css('box-shadow', 'none');
  }

  randSquare();
  createBall();

  $('.ball').click(hitBall);
}


$(()=>{

  createGrid();
  randSquare();
  createBall();

  $('#openModal').click(openModal);
  $('#close').click(closeModal);
  $('#rightButton').click(moveRight);
  $('#leftButton').click(moveLeft);
  $('#strengthMeter').click(increaseStrength);
  $('.ball').click(hitBall);



});
