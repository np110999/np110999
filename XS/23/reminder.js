const { touchDown,appState,stop, touchMove, touchUp, usleep, appActivate, keyDown, keyUp } = at
appActivate("com.apple.reminders");
function check() {
const result = appState("com.apple.reminders");
if (result !== "ACTIVATED") {
stop();
}
}
function rd(time) {
  if (time >= 50000 && time <= 100000) {
    return Math.random() * (100000 - 50000) + 50000;
  } else if (time >= 500000 && time <= 1000000) {
    return Math.random() * (1000000 - 500000) + 500000;
  } else if (time >= 1000000 && time <= 2000000) {
    return Math.random() * (2000000 - 1000000) + 1000000;
  } else if (time >= 2000000 && time <= 3000000) {
    return Math.random() * (3000000 - 2000000) + 2000000;
   } else {
    return time;
  }  
}

//new
function f() {
check();
touchDown(6, 113.06, 2516.72);
usleep(rd(73887.04));
touchUp(6, 113.06, 2516.72);
check();
usleep(rd(1776649.29));

//G
check();
touchDown(4, 627.25, 2036.18);
usleep(rd(66118.25));
touchUp(4, 627.25, 2036.18);
check();
usleep(rd(2818038.21));
check();
return true;
}

//type
function runRandom() {
  const randomNumber = Math.random();

  if (randomNumber < 0.333) {
      check();
    touchDown(1, 252.24, 1711.34);
usleep(rd(82970.25));
touchUp(1, 252.24, 1711.34);
usleep(rd(817146.71));
    check();
  } else if (randomNumber < 0.666) {
      check();
touchDown(3, 679.45, 1736.31);
usleep(rd(83014.33));
touchUp(3, 679.45, 1736.31);
usleep(rd(750380.46));
    check();
  } else {
      check();
touchDown(2, 1067.02, 1716.13);
usleep(rd(66294.83));
touchUp(2, 1067.02, 1716.13);
usleep(rd(1042448.33));
  }
  return true;
}
//return
function sen() {
    check();
touchDown(5, 1067.99, 2373.53);
usleep(rd(57826.17));
touchUp(5, 1067.99, 2373.53);
check();
return true;
}

function np(){
f();
for (let i = 0; i < 10; i++) {
    check();
     usleep(rd(852904));
     const iterations = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
// random
for (let i = 0; i < iterations; i++) {
  runRandom();
}
    sen(); 
    usleep(rd(1452904));
  }
}
np();
