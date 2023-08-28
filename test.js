const { touchDown,appState,stop, touchMove, touchUp, usleep, appActivate, keyDown, keyUp } = at
appActivate("com.apple.mobilecal");
function check() {
const result = appState("com.apple.mobilecal");
if (result !== "ACTIVATED") {
stop();
}
}
check();
function rd(time) {
  if (time >= 50000 && time <= 100000) {
    return Math.random() * (100000 - 50000) + 50000;
  } else if (time >= 7800 && time <= 8700) { //move
    return Math.random() * (8700 - 7800) + 7800;
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

//today
function today() {
touchDown(1, 92.42, 1680.71);check();
usleep(rd(91259.12));
touchUp(1, 92.42, 1680.71);check();
usleep(rd(1450015.12));

touchDown(1, 103.71, 1666.38);check();
usleep(rd(83136.58));
touchUp(1, 103.71, 1666.38);check();
usleep(rd(1508266.46));check();
return true;
}
//+
function cong() {
touchDown(5, 773.26, 133.46);check();
usleep(rd(90843.54));
touchUp(5, 773.26, 133.46);check();
usleep(rd(2234238.25));check();
return true;
}
function type() {
  const randomNumber = Math.random();

  if (randomNumber < 0.1) {
      check(); //G
touchDown(3, 417.94, 1370.66);
usleep(rd(66643.67));check();
touchUp(3, 417.94, 1370.66);
usleep(rd(967004.92));
    check();
  } else if (randomNumber < 0.5) {
      check();
touchDown(6, 150.95, 1147.56);
usleep(rd(91151.71));check();
touchUp(6, 150.95, 1147.56);
usleep(rd(683847.04));
    check();
  } else if (randomNumber < 0.755) {
      check();
touchDown(2, 413.84, 1152.68);
usleep(rd(74450.58));check();
touchUp(2, 413.84, 1152.68);
usleep(rd(883869.92));
    check();
  } else {
      check();
touchDown(4, 696.24, 1147.56);
usleep(rd(82700.92));check();
touchUp(4, 696.24, 1147.56);
usleep(rd(733870.96));check();
  }
  return true;
}

function add() {
//add
touchDown(5, 754.77, 176.45);check();
usleep(rd(65460.96));check();
touchUp(5, 754.77, 176.45);
usleep(rd(1976081.25));check();
return true; 
}
//move

function move() {
touchDown(1, 731.16, 246.04);check();
usleep(57759.38);
touchMove(1, 718.84, 240.93);
usleep(rd(8535.54));
touchMove(1, 713.70, 240.93);
usleep(rd(8290.46));
touchMove(1, 708.57, 240.93);
usleep(rd(8414.38));
touchMove(1, 702.40, 240.93);
usleep(rd(8412.50));check();
touchMove(1, 696.24, 240.93);
usleep(rd(8082.54));
touchMove(1, 690.08, 240.93);
usleep(rd(8423.00));check();
touchMove(1, 681.86, 241.94);
usleep(rd(8118.83));
touchMove(1, 674.67, 242.98);
usleep(rd(8462.21));
touchMove(1, 667.49, 243.99);check();
usleep(rd(8650.00));
touchMove(1, 660.31, 245.00);
usleep(rd(7984.83));
touchMove(1, 653.12, 246.04);
usleep(rd(8482.46));
touchMove(1, 645.93, 247.05);
usleep(rd(8277.75));
touchMove(1, 638.74, 248.09);
usleep(rd(8435.67));check();
touchMove(1, 631.55, 248.09);
usleep(rd(8429.29));
touchMove(1, 624.36, 249.10);
usleep(rd(7982.67));
touchMove(1, 617.17, 249.10);check();
usleep(rd(8396.54));
touchMove(1, 608.96, 250.14);
usleep(rd(8640.00));
touchMove(1, 601.77, 251.15);
usleep(rd(8066.71));
touchMove(1, 593.55, 252.16);
usleep(rd(8432.04));
touchMove(1, 585.33, 253.20);
usleep(rd(8171.17));
touchMove(1, 577.12, 254.21);
usleep(rd(8389.25));check();
touchMove(1, 567.87, 255.25);
usleep(rd(8352.54));
touchMove(1, 558.64, 256.27);
usleep(rd(8378.00));
touchMove(1, 549.39, 257.30);check();
usleep(rd(8259.42));
touchMove(1, 538.09, 258.32);
usleep(rd(8450.38));
touchMove(1, 527.82, 259.33);
usleep(rd(8417.38));
touchMove(1, 515.50, 260.37);
usleep(rd(8356.67));
touchMove(1, 502.15, 261.38);
usleep(rd(8213.08));check();
touchMove(1, 486.75, 262.42);
usleep(rd(8595.33));
touchMove(1, 470.32, 264.44);
usleep(rd(8189.29));
touchMove(1, 452.86, 267.53);
usleep(rd(8471.75));
touchMove(1, 434.38, 269.58);
usleep(rd(8133.92));check();
touchMove(1, 416.92, 273.66);
usleep(rd(8423.29));
touchMove(1, 398.43, 277.76);
usleep(rd(8529.17));
touchMove(1, 379.95, 281.86);
usleep(rd(8177.46));
touchMove(1, 361.47, 286.97);
usleep(rd(8149.12));check();
touchMove(1, 344.01, 292.09);
usleep(rd(8602.38));
touchMove(1, 324.50, 298.21);
usleep(rd(8360.50));
touchMove(1, 304.99, 304.36);
usleep(rd(8311.88));
touchMove(1, 284.45, 310.52);check();
usleep(rd(8403.92));
touchMove(1, 262.88, 317.68);
usleep(rd(8099.58));
touchMove(1, 240.29, 324.84);
usleep(rd(8555.33));check();
touchMove(1, 216.68, 331.98);
usleep(rd(8288.54));
touchMove(1, 196.13, 339.14);
usleep(rd(8272.38));
touchMove(1, 175.59, 346.31);check();
usleep(rd(8065.79));
touchMove(1, 155.06, 353.47);
usleep(rd(8597.38));
touchMove(1, 136.58, 361.68);
usleep(rd(8278.21));
touchUp(1, 113.99, 373.95);check();
usleep(rd(825878.21));check();
return true;
}


function np(){
    usleep(rd(2725354));
    today();
for (let i = 0; i < 8; i++) { //NPNPNPNP
    cong();
    const iterations = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
for (let i = 0; i < iterations; i++) {
  type();
}
add();
move();


    usleep(rd(852904));
  }
}
np();
