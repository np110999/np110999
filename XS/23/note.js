const { touchDown,appState,stop, touchMove, touchUp, usleep, appActivate, keyDown, keyUp } = at
appActivate("com.apple.mobilenotes");
function check() {
const result = appState("com.apple.mobilenotes");
if (result !== "ACTIVATED") {
stop();
}
}
function main() {
//add
touchDown(3, 1135.64, 2546.54);
usleep(91103.38);
touchUp(3, 1135.64, 2546.54);
usleep(2459149.29);
check();
//type
touchDown(6, 763.53, 2045.82);
usleep(82374.00);
touchUp(6, 763.53, 2045.82);
usleep(484167.62);
check();
touchDown(5, 592.46, 1698.87);
usleep(90277.79);
touchUp(5, 592.46, 1698.87);
usleep(334626.67);
check();
touchDown(2, 1031.26, 1751.70);
usleep(108137.25);
touchUp(2, 1031.26, 1751.70);
usleep(458835.00);
check();
touchDown(5, 587.63, 1732.50);
usleep(99576.58);
touchUp(5, 587.63, 1732.50);
usleep(474983.88);
check();
touchDown(2, 1025.46, 1768.06);
usleep(66619.46);
touchUp(2, 1025.46, 1768.06);
usleep(1250627.92);
//done
touchDown(4, 1115.35, 206.31);
usleep(74924.21);
touchUp(4, 1115.35, 206.31);
usleep(1124556);
return true; 
}
function np(){

for (let i = 0; i < 10; i++) {
     usleep( 852904);
    main(); 
    usleep( 852904);
  }
}
np();
