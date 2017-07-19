let guy = document.querySelector('.guy');
let guyCounter = 0;
let guyLeft = 0;
let cat = document.querySelector('.cat');
let catFallCounter = 0;
let catTop = -50;
let catLeft = 300;

let guyPositions = [
  { x: -270, y: -300 },
  { x: -353, y: -300 },
  { x: -443, y: -300 },
  { x: -520, y: -300 },
  { x: -605, y: -300 },
  { x: -685, y: -300 },
];

let catFallPositions = [
  { x: 0, y: 0 },
  { x: 0, y: -25 },
  { x: 0, y: -50 },
  { x: 0, y: -75 },
  { x: 0, y: -100 },
  { x: 0, y: -125 },
  { x: 0, y: -150 },
  { x: 0, y: -175 },
];

let catLeapPositions = [
  { x: 0, y: -200 },
  { x: 0, y: -225 },
  { x: 0, y: -225 },
  { x: 0, y: -225 },
  { x: 0, y: -225 },
  { x: 0, y: -225 },
  { x: 0, y: -225 },
  { x: 0, y: -250 },
  { x: 0, y: -250 },
  { x: 0, y: -250 },
  { x: 0, y: -250 },
  { x: 0, y: -250 },
  { x: 0, y: -250 },
  { x: 0, y: -275 },
  { x: 0, y: -275 },
  { x: 0, y: -275 },
  { x: 0, y: -275 },
  { x: 0, y: -275 },
  { x: 0, y: -275 },
  { x: 0, y: -300 }
];

let guyWalkClear = setInterval(function() {
  guy.style.backgroundPositionX = guyPositions[guyCounter].x + 'px';
  guy.style.backgroundPositionY = guyPositions[guyCounter].y + 'px';
  guy.style.left = guyLeft + 'px';
  guyCounter++;
  if (guyCounter >= guyPositions.length) {
    guyCounter = 0;
  }
  guyLeft += 10 ;
}, 100);

setTimeout(function() {

  let catFallClear = setInterval(function() {
    cat.style.top = catTop + 'px';
    catTop += 5;
  }, 10);

  setTimeout(function() {
  }, 300);

  setTimeout(function() {

    clearInterval(catFallClear);
    catFall();
  }, 570);

}, 2300);

setTimeout(function() {

  clearInterval(guyWalkClear);

}, 2800)

function catFall() {
  let stopFall = setInterval(function() {
    while(catFallCounter < catFallPositions.length) {
      cat.style.backgroundPositionY = catFallPositions[catFallCounter].y + 'px';
      catFallCounter++;
    }
  }, 50);
  catLeap();
};

function catLeap() {
  let x = 20;
  let catLeapCounter = 0;
  let catLeapClear = setInterval(function() {
    setTimeout(function() {
      catLeapPositions.forEach(function(position) {
        cat.style.backgroundPositionY = position.y + 'px';
      });
    }, 300);
    cat.style.top = catTop + 'px';
    cat.style.left = catLeft + 'px';
    catTop -= x;
    catLeft += 20;
    x -= 3;
  }, 50);
  setTimeout(function() {
    clearInterval(catLeapClear);
  }, 900);
};
