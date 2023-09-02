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
    usleep(53512);
    touchUp(0, x, y);
}
function main(){
usleep(1521984);
check1()
//info
//touchDown(6, 849.55, 376.40);
//usleep(99646.92);
//touchUp(6, 849.55, 376.40);
//usleep(2957230.50);
//////////////////
check1()
touchDown(2, 406.89, 1183.71);//doong 4
usleep(66254.08);//doong 4
touchUp(2, 406.89, 1183.71);//doong 4

//////////////
check1()
// touchDown(4, 376.92, 1356.71);//dong5
// usleep(91339.25);//dong5
// touchUp(4, 376.92, 1356.71);//dong5
///////////////////
usleep(2413277.67);
check1()
//bam gui mail
touchDown(6, 856.32, 774.29);///bamvaomail31
usleep(124114.12);///bamvaomail31
touchUp(6, 856.32, 774.29);///bamvaomail31
//////
// touchDown(5, 951.04, 762.77);
// usleep(74696.50);
// touchUp(5, 951.04, 762.77);
usleep(2096592.04);
//mail

touchDown(4, 970.37, 2054.43);
usleep(90926.04);
touchUp(4, 970.37, 2054.43);
usleep(577142.96);
check()
touchDown(6, 549.93, 1721.92);
usleep(91625.17);
touchUp(6, 549.93, 1721.92);
usleep(484204.71);
check()
touchDown(1, 1015.80, 1722.86);
usleep(100091.71);
touchUp(1, 1015.80, 1722.86);
usleep(476076.67);
check()
touchDown(6, 505.47, 1723.85);
usleep(83372.00);
touchUp(6, 505.47, 1723.85);
usleep(375769.58);
check()
touchDown(1, 999.37, 1732.50);
usleep(74168.17);
touchUp(1, 999.37, 1732.50);
usleep(593801.58);
check()
touchDown(2, 172.99, 982.86);
usleep(57294.17);
touchUp(2, 172.99, 982.86);
usleep(903023.12);
check()
touchDown(6, 507.41, 1717.12);
usleep(91459.46);
touchUp(6, 507.41, 1717.12);
usleep(451276.00);
check()
touchDown(5, 900.78, 1726.72);
usleep(99001.42);
touchUp(5, 900.78, 1726.72);
usleep(401897.00);
check()
touchDown(6, 494.84, 1689.23);
usleep(91520.21);
touchUp(6, 494.84, 1689.23);
usleep(409499.58);
check()
touchDown(5, 907.55, 1726.72);
usleep(91277.33);
touchUp(5, 907.55, 1726.72);
usleep(401089.38);
check()
touchDown(6, 499.67, 1708.46);
usleep(99328.79);
touchUp(6, 499.67, 1708.46);
usleep(1762527.96);
check()
touchDown(3, 1102.78, 371.60);
usleep(83186.29);
touchUp(3, 1102.78, 371.60);
usleep(2438495.79);
check()
touchDown(4, 160.42, 58.28);
usleep(99319.25);
touchUp(4, 160.42, 58.28);
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

    usleep(Math.random() * (6000000 - 3000000) + 3000000);

    return true;
     } else {
     touchDown(3, 627.25, 216.85);
usleep(74649.42);
touchUp(3, 627.25, 216.85);
usleep(704649.42);
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
    usleep(2725354);
for (let i = 0; i < 50; i++) { //NPNPNPNP
    usleep(823240);
    info();
    main(); 
    usleep( 852904);
  }
}
np();
//img//info
