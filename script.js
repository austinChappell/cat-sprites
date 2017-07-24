// DEFINE VARIABLES

let guy = document.querySelector('.guy');
let guyCounter = 0;
let guyLeft = 0;
let cat = document.querySelector('.cat');
let catFallCounter = 0;
let catTop = -50;
let catLeft = 300;
let arrow = document.querySelector('.arrow');
let arrowLeft = 350;
let stopFall;
let explosionImage = document.querySelector('.explosion');

let guyPositions = [
  { x: -270, y: -300, height: 130, width: 80, top: 200 },
  { x: -353, y: -300, height: 130, width: 80, top: 200 },
  { x: -443, y: -300, height: 130, width: 80, top: 200 },
  { x: -520, y: -300, height: 130, width: 80, top: 200 },
  { x: -605, y: -300, height: 130, width: 80, top: 200 },
  { x: -685, y: -300, height: 130, width: 80, top: 200 }
];

let guyStartle = [
  { x: -290, y: -158, height: 130, width: 80, top: 200, rotate: 0 },
  { x: -290, y: -158, height: 130, width: 80, top: 200, rotate: -2 },
  { x: -290, y: -158, height: 130, width: 80, top: 200, rotate: -4 },
  { x: -290, y: -158, height: 130, width: 80, top: 200, rotate: -6 },
  { x: -290, y: -158, height: 130, width: 80, top: 200, rotate: -8 },
  { x: -80, y: -55, height: 150 , width: 100, top: 190, rotate: -10 },
  { x: -80, y: -55, height: 150 , width: 100, top: 190, rotate: -8 },
  { x: -80, y: -55, height: 150 , width: 100, top: 190, rotate: -6 },
  { x: -80, y: -55, height: 150 , width: 100, top: 190, rotate: -4 },
  { x: -80, y: -55, height: 150 , width: 100, top: 190, rotate: -2 },
  { x: -80, y: -55, height: 150 , width: 100, top: 190, rotate: 0 },
  { x: -80, y: -55, height: 150 , width: 100, top: 190, rotate: 0 },
  { x: -605, y: -300, height: 130, width: 80, top: 200, rotate: 0 },
  { x: -520, y: -300, height: 130, width: 80, top: 200, rotate: 0 },
  { x: -0, y: -65, height: 130, width: 80, top: 200, rotate: 0 },
  { x: -290, y: -158, height: 130, width: 80, top: 200, rotate: 0 },
  { x: -290, y: -158, height: 130, width: 80, top: 200, rotate: 0 },
  { x: -290, y: -158, height: 130, width: 80, top: 200, rotate: 0 },
  { x: -186, y: -15, height: 130, width: 80, top: 200, rotate: 0 },
  { x: -280, y: -15, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -280, y: -15, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -280, y: -15, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -280, y: -15, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -280, y: -15, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -280, y: -15, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -400, y: -10, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -400, y: -10, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -400, y: -10, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -400, y: -10, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -400, y: -10, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -400, y: -10, height: 130, width: 120, top: 200, rotate: 0 },
  { x: -510, y: -10, height: 130, width: 120, top: 200, rotate: 0 }
];

let catFallPositions = [
  { x: 0, y: 0 },
  { x: 0, y: -25 },
  { x: 0, y: -50 },
  { x: 0, y: -75 },
  { x: 0, y: -100 },
  { x: 0, y: -125 },
  { x: 0, y: -150 },
  { x: 0, y: -175 }
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

let catRunPositions = [
  { x: 0, y: 0 },
  { x: 0, y: -25 },
  { x: 0, y: -50 },
  { x: 0, y: -75 },
  { x: 0, y: -100 },
  { x: 0, y: -125 },
  { x: 0, y: -150 },
  { x: 0, y: -175 },
  { x: 0, y: -200 },
  { x: 0, y: -225 },
  { x: 0, y: -250 },
  { x: 0, y: -275 },
  { x: 0, y: -300 }
];

let explosionPositions = [
  { x: 0, y: 0 },
  { x: -98, y: 0 },
  { x: -194, y: 0 },
  { x: -290, y: 0 },
  { x: -387, y: 0 },
  { x: 5, y: -98 },
  { x: -90, y: -98 },
  { x: -188, y: -98 },
  { x: -284, y: -98 },
  { x: -380, y: -98 },
  { x: 4, y: -194 },
  { x: -90, y: -194 },
  { x: -186, y: -194 },
  { x: -283, y: -194 }
];

// GUY WALKS OUT INITIALLY
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

// CAT FALLING INITIALLY
function catFall() {
  let counter = 0;
  stopFall = setInterval(function() {
    while(counter < catFallPositions.length) {
      cat.style.backgroundPositionY = catFallPositions[counter].y + 'px';
      counter++;
    }
  }, 50);
  clearInterval(stopFall);
  catLeap();
};

// CAT JUMPS OFF GUY
function catLeap() {
  let y = 20;
  let catLeapCounter = 0;
  let catLeapClear = setInterval(function() {
    setTimeout(function() {
      catLeapPositions.forEach(function(position) {
        cat.style.backgroundPositionY = position.y + 'px';
      });
    }, 300);
    cat.style.top = catTop + 'px';
    cat.style.left = catLeft + 'px';
    catTop -= y;
    catLeft += 20;
    y -= 3;
  }, 50);
  // LEAP ENDS
  setTimeout(function() {
    clearInterval(catLeapClear);
    // CAT RUNS
    catRun();
  }, 900);
};

// CAT RUNS
function catRun() {
  let count = 0;
  let killCat = setInterval(function() {
    cat.style.backgroundPositionX = catRunPositions[count].x + 'px';
    cat.style.backgroundPositionY = catRunPositions[count].y + 'px';
    cat.style.left = catLeft + 'px';
    catLeft += 20;
    count++;
    if (count >= catRunPositions.length) {
      count = 0;
    }
  }, 100);
  setTimeout(function() {
    clearInterval(killCat);
  }, 2000);
};

// ARCHER GETS HIT BY CAT
function startleGuy() {
  guyCounter = 0;
  let clearStartle = setInterval(function() {
    guy.style.backgroundPositionX = guyStartle[guyCounter].x + 'px';
    guy.style.backgroundPositionY = guyStartle[guyCounter].y + 'px';
    guy.style.height = guyStartle[guyCounter].height + 'px';
    guy.style.width = guyStartle[guyCounter].width + 'px';
    guy.style.top = guyStartle[guyCounter].top + 'px';
    guy.style.transform = `rotate(${ guyStartle[guyCounter].rotate }deg)`;
    guyCounter++;
    if (guyCounter >= guyStartle.length) {
      guyCounter = guyStartle.length - 1;
    };
  }, 50);
  setTimeout(function() {
    clearInterval(clearStartle);
  }, 2000);
};

// ARROW LEAVES THE BOW
function arrowFly() {
  let arrowTop = 235;
  let stopFly = setInterval(function() {
    arrow.style.left = arrowLeft + 'px';
    arrow.style.top = arrowTop + 'px';
    arrowLeft += 10;
    if (arrowLeft > 650) {
      arrowTop += 2;
    };
    if (arrowLeft > 1010) {
      arrowLeft = 1010;
      arrow.style.display = 'none';
      clearInterval(stopFly);
      explode();
    };
  }, 20);
};

// EXPLOSION OCCURS
function explode() {
  explosionImage.classList.remove('hide');
  let direction = 'down';
  let i = 0;
  let endExplosion = setInterval(function() {
    if (i < explosionPositions.length && direction === 'down') {
      explosionImage.style.backgroundPositionX = explosionPositions[i].x + 'px';
      explosionImage.style.backgroundPositionY = explosionPositions[i].y + 'px';
      i++;
    } else if(i > 0) {
      cat.classList.add('hide');
      direction = 'up';
      i--;
      explosionImage.style.backgroundPositionX = explosionPositions[i].x + 'px';
      explosionImage.style.backgroundPositionY = explosionPositions[i].y + 'px';
    };
    if (i === 0) {
      explosionImage.classList.add('hide');
      clearInterval(endExplosion);
    };
  }, 100);
};

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
    startleGuy();
  }, 570);

}, 2300);

setTimeout(function() {

  clearInterval(guyWalkClear);

}, 2800);

setTimeout(function() {
  arrowFly();
}, 4500);
