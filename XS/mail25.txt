const { touchDown,appState,stop,findImage, touchMove, touchUp, usleep, appActivate, keyDown, keyUp } = at
appActivate("com.apple.MobileSMS");
function check1() {
const result = appState("com.apple.MobileSMS");
if (result !== "ACTIVATED") {
stop();
}
}
function check() {
const result = appState("com.apple.mobilemail");
if (result !== "ACTIVATED") {
stop();
}
}

function us(x) {
    for (let i = 1; i <= x; i++) {
        usleep(1000000);
    }
}

function tap(x, y) {
    touchDown(0, x, y);
    usleep(Math.random() * (700000 - 50000) + 50000);
    touchUp(0, x, y);
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

//pp
function pp() {
    check1();
touchDown(1, 605.02, 240.88);
usleep(rd(72170.79));
touchUp(1, 605.02, 240.88);
usleep(rd(1720576.67));
check1();
return true;
}

//mail
function clicktomail() {
    check1();
touchDown(5, 1041.89, 993.40);
usleep(rd(66175.38));
touchUp(5, 1041.89, 993.40);
usleep(rd(2359505.58));
return true ;
}

//type

function runRandom() {
  const randomNumber = Math.random();

  if (randomNumber < 0.255) {
      check();
touchDown(6, 188.45, 1708.46);
usleep(rd(82878.46));
touchUp(6, 188.45, 1708.46);
usleep(rd(684071.21));
    check();
  } else if (randomNumber < 0.5) {
      check();//type H
touchDown(2, 750.00, 2047.71);
usleep(rd(99148.88));
touchUp(2, 750.00, 2047.71);
usleep(rd(925729.12));
    check();
  } else if (randomNumber < 0.755) {
      check();
touchDown(3, 594.39, 1707.48);
usleep(rd(83694.04));
touchUp(3, 594.39, 1707.48);
usleep(rd(899662.29));
    check();
  } else {
      check();
touchDown(1, 1023.53, 1729.59);
usleep(rd(83941.75));
touchUp(1, 1023.53, 1729.59);
usleep(rd(783121.12));
  }
  return true;
}

//from my iphone
function from_my_ip() {
    check();
touchDown(4, 126.60, 1014.56);
usleep(rd(73846.62));
touchUp(4, 126.60, 1014.56);
usleep(rd(2951549.46));
check();
return true;
}
//type123

function runRandom2() {
  const randomNumber = Math.random();

  if (randomNumber < 0.333) {
      check();
touchDown(6, 190.39, 1703.67);
usleep(rd(98983.96));
touchUp(6, 190.39, 1703.67);
usleep(rd(567867.29));
    check();
  } else if (randomNumber < 0.666) {
      check();
touchDown(3, 546.07, 1711.34);
usleep(rd(100391.50));
touchUp(3, 546.07, 1711.34);
usleep(rd(791295.67));
    check();
  } else {
      check();
touchDown(1, 941.37, 1713.26);
usleep(rd(66837.83));
touchUp(1, 941.37, 1713.26);
usleep(rd(951064.75));
  }
  return true;
}

//send
function send_back() {
    check();
touchDown(5, 1106.65, 400.44);
usleep(rd(74294.12));
touchUp(5, 1106.65, 400.44);
usleep(rd(1667194.46));
check();
//backmess
check();
touchDown(2, 115.00, 74.61);
usleep(rd(88362.58));
touchUp(2, 115.00, 74.61);
usleep(rd(88362.58));
return true;
}

function info() {
  const targetImagePath = '/var/mobile/Library/AutoTouch/Scripts/Examples/images/info.png';
  const [result] = findImage({
    targetImagePath,
count: 1,
threshold: 0.99,
region: [375,911,77,689],
debug: false,
method: 1,
  });
  if (result.length > 0) {
    const { x, y } = result[0];
    us(1);
    check1();
    tap(x, y);

    usleep(Math.random() * (2000000 - 1500000) + 1500000);

    return true;
     } else {
     pp();
    const [retryResult] = findImage({
      targetImagePath,
      count: 1,
      threshold: 0.99,
      region: [375, 911, 77, 689],
      debug: false,
      method: 1,
    });

    if (retryResult.length > 0) {
      const { x, y } = retryResult[0];
      us(1);
      check1();
      tap(x, y);
      check1();
      us(1);

      return true;
    } else {
      return false;
     
  }  
}
}

function np(){
    usleep(rd(2725354));
for (let i = 0; i < 50; i++) { //NPNPNPNP
    usleep(rd(823240));
    info();
    clicktomail();
    const iterations = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
// random
for (let i = 0; i < iterations; i++) {
  runRandom();
}
from_my_ip();

 const iterations2 = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
// random
for (let i = 0; i < iterations2; i++) {
  runRandom2();
}
send_back();



    usleep(rd(852904));
  }
}
np();
//img/info
