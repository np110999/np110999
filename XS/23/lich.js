const { touchDown,appState,stop, touchMove, touchUp, usleep, appActivate, keyDown, keyUp } = at
appActivate("com.apple.mobilecal");
function check() {
const result = appState("com.apple.mobilecal");
if (result !== "ACTIVATED") {
stop();
}
}
check();
//today
function today() {
touchDown(3, 107.27, 2516.72);
usleep(90179.08);
touchUp(3, 107.27, 2516.72);
usleep(1143310.21);
check();
touchDown(3, 108.23, 2496.54);
usleep(82417.29);
touchUp(3, 108.23, 2496.54);
usleep(1910134.17);
return true;
}
function main() {
//+
touchDown(2, 1135.64, 193.80);
usleep(74913.50);
touchUp(2, 1135.64, 193.80);
usleep(2159529.67);
//type
touchDown(5, 882.42, 2170.75);
usleep(82532.21);
touchUp(5, 882.42, 2170.75);
usleep(667299.96);
check();
touchDown(1, 587.63, 1719.05);
usleep(83260.12);
touchUp(1, 587.63, 1719.05);
usleep(350500.75);
check();
touchDown(6, 1063.16, 1738.24);
usleep(91157.38);
touchUp(6, 1063.16, 1738.24);
usleep(400764.29);
check();
touchDown(1, 567.33, 1727.70);
usleep(99538.83);
touchUp(1, 567.33, 1727.70);
usleep(333773.17);
check();
touchDown(6, 1060.26, 1745.95);
usleep(82220.96);
touchUp(6, 1060.26, 1745.95);
usleep(1084950.92);
//add
touchDown(2, 1111.48, 257.21);
usleep(74659.00);
touchUp(2, 1111.48, 257.21);
usleep(3118602.88);
check();
//move
check();
touchDown(4, 1010.00, 348.55);
usleep(41805.96);
touchMove(4, 991.63, 350.44);
usleep(8127.33);
touchMove(4, 987.77, 350.44);
usleep(8789.54);
touchMove(4, 981.97, 350.44);
usleep(8077.46);
touchMove(4, 977.14, 350.44);
usleep(8326.54);
touchMove(4, 973.27, 350.44);
usleep(8500.67);
check();
touchMove(4, 967.47, 350.44);
usleep(8285.29);
touchMove(4, 961.67, 350.44);
usleep(8190.71);
touchMove(4, 954.90, 350.44);
usleep(8329.42);
touchMove(4, 947.17, 350.44);
usleep(8362.75);
check();
touchMove(4, 937.51, 350.44);
usleep(8564.50);
touchMove(4, 925.91, 350.44);
usleep(8111.88);
touchMove(4, 911.41, 350.44);
usleep(8287.42);
touchMove(4, 895.95, 350.44);
usleep(8306.00);
touchMove(4, 881.45, 350.44);
usleep(8338.33);
check();
touchMove(4, 866.95, 350.44);
usleep(8718.67);
touchMove(4, 852.45, 350.44);
usleep(7898.33);
touchMove(4, 839.89, 350.44);
usleep(8455.79);
touchMove(4, 825.39, 350.44);
usleep(8323.79);
touchMove(4, 811.86, 350.44);
usleep(8530.38);
touchMove(4, 797.36, 350.44);
usleep(8383.50);
check();
touchMove(4, 781.90, 350.44);
usleep(8257.83);
touchMove(4, 764.50, 350.44);
usleep(8195.33);
touchMove(4, 746.14, 350.44);
usleep(8485.50);
touchMove(4, 726.81, 350.44);
usleep(8110.58);
touchMove(4, 706.51, 350.44);
usleep(8629.50);
touchMove(4, 686.21, 350.44);
usleep(8189.38);
touchMove(4, 665.91, 350.44);
usleep(8360.29);
touchMove(4, 644.65, 350.44);
usleep(8025.50);
check();
touchMove(4, 623.39, 350.44);
usleep(8638.88);
touchMove(4, 602.12, 350.44);
usleep(8313.88);
touchMove(4, 582.79, 350.44);
usleep(8512.38);
touchMove(4, 565.40, 350.44);
usleep(7991.38);
touchMove(4, 547.03, 350.44);
usleep(8443.17);
touchMove(4, 529.64, 350.44);
usleep(8277.62);
touchMove(4, 513.20, 350.44);
usleep(8588.50);
touchMove(4, 497.74, 350.44);
usleep(8015.46);
check();
touchMove(4, 482.28, 350.44);
usleep(8625.54);
touchMove(4, 468.74, 350.44);
usleep(8171.96);
touchMove(4, 455.21, 350.44);
usleep(8532.88);
touchMove(4, 442.65, 350.44);
usleep(8175.75);
touchMove(4, 428.15, 350.44);
usleep(8427.21);
touchMove(4, 413.65, 350.44);
usleep(8191.54);
touchUp(4, 394.32, 351.42);
usleep(800191.54);
return true;
}
function np() {
    check();
    today();
    for (let i = 0; i < 8; i++) {
    check();
    main(); 
    usleep(1231231);
  }
}
np();
