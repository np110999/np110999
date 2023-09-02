const { touchDown,appState,stop, touchMove,toast, touchUp, usleep, appActivate, keyDown, keyUp } = at
appActivate("com.apple.MobileSMS");
function check() {
const result = appState("com.apple.MobileSMS");
if (result !== "ACTIVATED") {
stop();
}
}
//space
check();
usleep(1056341);
touchDown(1, 773.20, 2517.70);
usleep(125084.21);
touchUp(1, 773.20, 2517.70);
usleep(1642413.79);
check();
//K
touchDown(5, 776.10, 2202.46);
usleep(74838.71);
touchUp(5, 776.10, 2202.46);
usleep(1417690.17);
check();
//type
function sen(){

check();
touchDown(2, 1118.25, 1562.37);
usleep(116780.04);
touchUp(2, 1118.25, 1562.37);
check();
return true;
}
function runRandom() {
  const randomNumber = Math.random();

  if (randomNumber < 0.333) {
    touchDown(6, 568.30, 1702.68);
    usleep(91330.83);
    touchUp(6, 568.30, 1702.68);
    usleep(325394.62);
    check();
  } else if (randomNumber < 0.666) {
    touchDown(3, 1042.86, 1734.43);
    usleep(83032.96);
    touchUp(3, 1042.86, 1734.43);
    usleep(492296.96);
    check();
  } else {
    touchDown(6, 186.52, 1712.32);
    usleep(74969.71);
    touchUp(6, 186.52, 1712.32);
    usleep(1309372.08);
    check();
  }
}

function np(){

for (let i = 0; i < 200; i++) {
     usleep( 852904);
     const iterations = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
// random
for (let i = 0; i < iterations; i++) {
  runRandom();
}
    sen(); 
    usleep( 2452904);
  }
}
np();


