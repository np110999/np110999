

const { findImage,appState,stop,getColor,appActivate, touchDown, touchUp, usleep, toast,keyDown,touchMove, keyUp,appKill,screenshot } = at;
const { 
    check,us,tap,
    typeZ,typeX,typeC,typeV,typeB,typeN,typeM,
    typeA,typeS,typeD,typeF,typeG,typeH,typeJ,typeK,typeL,
    typeQ,typeW,typeE,typeR,typeT,typeY,typeU,typeI,typeO,typeP,

    so0,so1,so2,so3,so4,so5,so6,so7,so8,so9,
    //typing,    
         gotu,typeWord,getRandomName,names,getRandomso,sos,rd,
   } 
= require("./typing");
const bundleID = "com.apple.mobilephone"; // nhớ cái này
appActivate(bundleID);

//contacts
function contacts(){
 touchDown(3, 526.80, 1664.33);check();
 usleep(rd(116643.96));check();
 touchUp(3, 526.80, 1664.33);check();
 usleep(rd(1086054.08));check();

 touchDown(3, 526.80, 1664.33);check();
 usleep(rd(116643.96));check();
 touchUp(3, 526.80, 1664.33);check();
 usleep(rd(1686054.08));check();

}
//cong
function cong(){
touchDown(2, 805.09, 129.39);
usleep(rd(58074.71));
touchUp(2, 805.09, 129.39);
usleep(rd(1300339.71));
}

function typing() {
    for (let i = 0; i < 1; i++) {check();
        const randomName = getRandomName();
        typeWord(randomName);check();
        //typeWord(' ');
        
        usleep(rd(906054.08));check(); // Để tạo khoảng thời gian giữa các lần gõ tên
    }
}

function typingso() {
    for (let i = 0; i < 10; i++) {check();
        const randomName = getRandomso();
        typeWord(randomName);check();
        //typeWord(' ');
        
        usleep(rd(106054.08));check(); // Để tạo khoảng thời gian giữa các lần gõ tên
    }
}
function addphone(){
 //addphone 23
// touchDown(1, 818.63, 1488.38);check();// adphone23xs
// usleep(rd(65446.46));check();// adphone23xs
// touchUp(1, 818.63, 1488.38);check();// adphone23xs
// usleep(rd(918039.04));check();// adphone23 xs

// touchDown(3, 857.29, 1603.71);  // addphone ios 14. xs
// usleep(rd(65446.46));check();  // addphone ios 14.xs
// touchUp(3, 857.29, 1603.71);  // addphone ios 14.xs
// usleep(rd(918039.04));check();  // addphone ios 14.xs

 touchDown(1, 571.98, 1072.86); // addphone 11
 usleep(rd(74475.79)); // addphone 11
 touchUp(1, 571.98, 1072.86); // addphone 11
 usleep(rd(918039.04));check(); // addphone 11
}
function doneContacts2(){
 //done
 touchDown(2, 768.13, 166.22);check();
 usleep(rd(74770.04));check();
 touchUp(2, 768.13, 166.22);check();
 usleep(rd(2919154.71));check();

 //contacts2
 touchDown(6, 88.31, 131.41);check();
 usleep(rd(83387.96));check();
 touchUp(6, 88.31, 131.41);check();
 usleep(rd(919154.71));check();


}
function np(){
  usleep(rd(919154.71));
   for (let i = 0; i < 10; i++) {
     contacts();  check();
     cong();check();
     typing();check();
     addphone();check();
     typingso();check();
     doneContacts2();check();

   }
   appKill(bundleID);
   usleep(rd(919154.71));
}
np();
