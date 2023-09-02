const { findImage,appState,stop,getColor,appActivate, touchDown, touchUp, usleep, toast,keyDown,touchMove, keyUp,appKill,screenshot } = at;

function check() {
  
    result = appState(bundleID);
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
    usleep(Math.random() * (80000 - 55000) + 55000);
    touchUp(0, x, y);
    usleep(Math.random() * (40000 - 30000) + 30000);
}

function typeZ() { tap(259.98, 2204.38);}function typeX() { tap(392.39, 2207.26);}function typeC() { tap(516.10, 2189.00);}function typeV() { tap(631.12, 2199.59);}
function typeB() { tap(756.77, 2205.33);}function typeN() { tap(879.52, 2201.51);}function typeM() { tap(1002.26, 2202.46);}function typeA() { tap(132.39, 2023.71);}
function typeS() { tap(262.88, 2030.44);}function typeD() { tap(398.19, 2030.44);}function typeF() { tap(498.71, 2039.09);}function typeG() { tap(627.25, 2052.54);}
function typeH() { tap(764.50, 2050.62);}function typeJ() { tap(877.58, 2044.83);}function typeK() { tap(1000.33, 2042.91);}function typeL() { tap(1134.68, 2027.53);}
function typeQ() {  tap(86.00, 1846.85);}function typeW() { tap(207.78, 1867.03);}function typeE() { tap(330.53, 1879.54);}function typeR() { tap(447.48, 1852.63);}
function typeT() { tap(577.96, 1868.02);}function typeY() { tap(695.88, 1868.96);}function typeU() { tap(827.32, 1879.54);}function typeI() { tap(939.44, 1878.56);}
function typeO() { tap(1051.56, 1876.67);}function typeP() { tap(1193.64, 1859.36); }
////////////////
function space() { tap(668.81, 2368.73); }
/////////////////
function so1() { tap(259.98, 1868.96); }function so2() { tap(669.78, 1869.94); }
function so3() { tap(1032.23, 1836.27); }function so4() { tap(268.67, 2002.55); }
function so5() { tap(664.95, 2031.38); }function so6() { tap(1037.06, 2034.25); }
function so7() { tap(240.65, 2180.35); }function so8() { tap(669.78, 2190.93); }
function so9() { tap(1008.06, 2189.95); }function so0() { tap(639.82, 2378.33); }

/////////////////
////////////////
////////////////
// const gotu = {
//     'z': typeZ,'x': typeX,'c': typeC,'v': typeV,'b': typeB,'n': typeN,
//     'm': typeM,'a': typeA,'s': typeS,'d': typeD,'f': typeF,'g': typeG,
//     'h': typeH,'j': typeJ,'k': typeK,'l': typeL,'q': typeQ,'w': typeW,
//     'e': typeE,'r': typeR,'t': typeT,'y': typeY,'u': typeU,'i': typeI,
//     'o': typeO,'p': typeP,
//     //
//     ' ':space,
//     // ...
//     '1': so1,'2': so2,'3': so3,'4': so4,'5': so5,
//     '6': so6,'7': so7,'8': so8,'9': so9,'0': so0, 
// };
// 
// function typeWord(word) {
//     for (const char of word) {
//         const typeFunction = gotu[char.toLowerCase()];
//         if (typeFunction) {
//             typeFunction();
//         }
//     }
// }
// 
// // Sử dụng
// //typeWord('hello'); // Để tách các từ
// //typeWord('world');
// //typeWord('ZXCVBNM ASDFGHJKL QWERTYUIOP');
// 
// 
// 
// 
// //typing();
// function typing() {
//     const names = [
//         // Danh sách tên
//         // ...
//     'James', 'Robert', 'John', 'Michael', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Christopher',
//     'Charles', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Andrew', 'Paul', 'Joshua',
//     'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Jason', 'Edward', 'Jeffrey', 'Ryan',
//     'Jacob', 'Gary', 'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon',
//     'Benjamin', 'Samuel', 'Gregory', 'Alexander', 'Patrick', 'Frank', 'Raymond', 'Jack', 'Dennis', 'Jerry',
//     'Tyler', 'Aaron', 'Jose', 'Adam', 'Nathan', 'Henry', 'Zachary', 'Douglas', 'Peter', 'Kyle', 'Noah',
//     'Ethan', 'Jeremy', 'Walter', 'Christian', 'Keith', 'Roger', 'Terry', 'Austin', 'Sean', 'Gerald',
//     'Carl', 'Harold', 'Dylan', 'Arthur', 'Lawrence', 'Jordan', 'Jesse', 'Bryan', 'Billy', 'Bruce',
//     'Gabriel', 'Joe', 'Logan', 'Alan', 'Juan', 'Albert', 'Willie', 'Elijah', 'Wayne', 'Randy',
//     'Vincent', 'Mason', 'Roy', 'Ralph', 'Bobby', 'Russell', 'Bradley', 'Philip', 'Eugene'    
//     ];
// 
//     function getRandomName() {
//         const randomIndex = Math.floor(Math.random() * names.length);
//         return names[randomIndex];
//     }
//     
// 
//     for (let i = 0; i < 10; i++) {
//         const randomName = getRandomName();
//         typeWord(randomName);
//         typeWord(' ');
//         
//         us(1); // Để tạo khoảng thời gian giữa các lần gõ tên
//     }
// }


function a() {
  usleep(3000000);
 // while(true) {
    //check();
     usleep(1000000);//check();
    const targetImagePath = '/var/mobile/Library/AutoTouch/Scripts/Records/znuoi/cong.png';//check();
    screenshot(targetImagePath, { x: 1117, y: 165, width: 64, height: 64 });  //[1117,165,64,64]  ///cong.png
    //////////////////////nuoi

    /////////////////////////////////
   //enterpass screenshot(targetImagePath, { x: 438, y: 1524, width: 369, height: 44 });//enterpass
   //AC screenshot(targetImagePath, { x: 27, y: 452, width: 223, height: 135 });//AC
   //retry screenshot(targetImagePath, { x: 433, y: 1412, width: 377, height: 91 });//retry
    //dis screenshot(targetImagePath, { x: 253, y: 1187, width: 737, height: 233 });//dis
    /////////////////////////////////////////////////////////////////////////////////search screenshot(targetImagePath, { x: 1061, y: 2461, width: 111, height: 119 });
    // search screenshot(targetImagePath, { x: 1065, y: 2460, width: 104, height: 118 });// search   search 1 ,2
    //get screenshot(targetImagePath, { x: 1019, y: 2017, width: 105, height: 51 });//get   5 chụp hoặc add
    // screenshot(targetImagePath, { x: 1070, y: 281, width: 114, height: 113 });  //avt  3
    //  screenshot(targetImagePath, { x: 59, y: 443, width: 170, height: 170 });   //avt2    4

    const [result] = findImage({
        targetImagePath,
        count: 1,
        threshold: 0.99,
        region: [1117,165,64,64], ///null,//[569,1231,99,501]
        debug: false,
        method: 1,
    });

    if (result !== null && result.length > 0) {
        const { x, y } = result[0];//check();
        tap(x, y);
       // check();
        usleep(1000000);
        
    } //}
}
//a();


//CONTACCTS
//bam vao contacts
//bam vao +
//doi 1s
//typing name
//doi 1s
//bam vao add phone
//typing sodt
//bam vao done
//doi 1s
//bam vao contacts
//bam vao +
//


// Định nghĩa hàm typeWord và gotu ở đây
const gotu = {
    'z': typeZ,'x': typeX,'c': typeC,'v': typeV,'b': typeB,'n': typeN,
    'm': typeM,'a': typeA,'s': typeS,'d': typeD,'f': typeF,'g': typeG,
    'h': typeH,'j': typeJ,'k': typeK,'l': typeL,'q': typeQ,'w': typeW,
    'e': typeE,'r': typeR,'t': typeT,'y': typeY,'u': typeU,'i': typeI,
    'o': typeO,'p': typeP,
    //
    ' ': space,
    // ...
    '1': so1,'2': so2,'3': so3,'4': so4,'5': so5,
    '6': so6,'7': so7,'8': so8,'9': so9,'0': so0, 
};

function typeWord(word) {
    for (const char of word) {
        const typeFunction = gotu[char.toLowerCase()];
        if (typeFunction) {
            typeFunction();
        }
    }
}

// Định nghĩa hàm getRandomName ở đây
const names = [
    // Danh sách tên
    // ...
    'James', 'Robert', 'John', 'Michael', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Christopher',
    'Charles', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Andrew', 'Paul', 'Joshua',
    'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Jason', 'Edward', 'Jeffrey', 'Ryan',
    'Jacob', 'Gary', 'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon',
    'Benjamin', 'Samuel', 'Gregory', 'Alexander', 'Patrick', 'Frank', 'Raymond', 'Jack', 'Dennis', 'Jerry',
    'Tyler', 'Aaron', 'Jose', 'Adam', 'Nathan', 'Henry', 'Zachary', 'Douglas', 'Peter', 'Kyle', 'Noah',
    'Ethan', 'Jeremy', 'Walter', 'Christian', 'Keith', 'Roger', 'Terry', 'Austin', 'Sean', 'Gerald',
    'Carl', 'Harold', 'Dylan', 'Arthur', 'Lawrence', 'Jordan', 'Jesse', 'Bryan', 'Billy', 'Bruce',
    'Gabriel', 'Joe', 'Logan', 'Alan', 'Juan', 'Albert', 'Willie', 'Elijah', 'Wayne', 'Randy',
    'Vincent', 'Mason', 'Roy', 'Ralph', 'Bobby', 'Russell', 'Bradley', 'Philip', 'Eugene',
    'Noah','Oliver','James','Elijah','William','Henry','Lucas','Benjamin','Theodore','Mateo','Levi','Sebastian',
'Daniel','Jack','Michael','Alexander','Owen','Asher','Samuel','Ethan','Leo','Jackson','Mason','Ezra','John',
'Hudson','Luca','Aiden','Joseph','David','Jacob','Logan','Luke','Julian','Gabriel','Grayson','Wyatt','Matthew',
'Maverick','Dylan','Isaac','Elias','Anthony','Thomas','Jayden','Carter','Santiago','Ezekiel','Charles','Josiah',
'Caleb','Cooper','Lincoln','Miles','Christopher','Nathan','Isaiah','Kai','Joshua','Andrew','Angel','Adrian',
'Cameron','Nolan','Waylon','Jaxon','Roman','Eli','Wesley','Aaron','Ian','Christian','Ryan','Leonardo','Brooks',
'Axel','Walker','Jonathan','Easton','Everett','Weston','Bennett','Robert','Jameson','Landon','Silas','Jose',
'Beau','Micah','Colton','Jordan','Jeremiah','Parker','Greyson','Rowan','Adam','Nicholas','Theo','Xavier',
'Hunter','Dominic','Jace','Gael','River','Thiago','Kayden','Damian','August','Carson','Austin','Myles','Amir',
'Declan','Emmett','Ryder','Luka','Connor','Jaxson','Milo','Enzo','Giovanni','Vincent','Diego','Luis','Archer',
'Harrison','Kingston','Atlas','Jasper','Sawyer','Legend','Lorenzo','Evan','Jonah','Chase','Bryson','Adriel',
'Nathaniel','Arthur','Juan','George','Cole','Zion','Jason','Ashton','Carlos','Calvin','Brayden','Elliot','Rhett',
'Emiliano','Ace','Jayce','Graham','Max','Braxton','Leon','Ivan','Hayden','Jude','Malachi','Dean','Tyler','Jesus',
'Zachary','Kaiden','Elliott','Arlo','Emmanuel','Ayden','Bentley','Maxwell','Amari','Ryker','Finn','Antonio',
'Charlie','Maddox','Justin','Judah','Kevin','Dawson','Matteo','Miguel','Zayden','Camden','Messiah','Alan','Alex',
'Nicolas','Felix','Alejandro','Jesse','Beckett','Matias','Tucker','Emilio','Xander','Knox','Oscar','Beckham',
'Timothy','Abraham','Andres','Gavin','Brody','Barrett','Hayes','Jett','Brandon','Joel','Victor','Peter','Abel',
'Edward','Karter','Patrick','Richard','Grant','Avery','King','Caden','Adonis','Riley','Tristan','Kyrie','Blake',
'Eric','Griffin','Malakai','Rafael','Israel','Tate','Lukas','Nico','Marcus','Stetson','Javier','Colt','Omar',
'Simon','Kash','Remington','Jeremy','Louis','Mark','Lennox','Callum','Kairo','Nash','Kyler','Dallas','Crew',
'Preston','Paxton','Steven','Zane','Kaleb','Lane','Phoenix','Paul','Cash','Kenneth','Bryce','Ronan','Kaden',
'Maximiliano','Walter','Maximus','Emerson','Hendrix','Jax','Atticus','Zayn','Tobias','Cohen','Aziel','Kayson',
'Rory','Brady','Finley','Holden','Jorge','Malcolm','Clayton','Niko','Francisco','Josue','Brian','Bryan','Cade',
'Colin','Andre','Cayden','Aidan','Muhammad','Derek','Ali','Elian','Bodhi','Cody','Jensen','Damien','Martin',
'Cairo','Ellis','Khalil','Otto','Zander','Dante','Ismael','Angelo','Brantley','Manuel','Colson','Cruz','Tatum',
'Jaylen','Jaden','Erick','Cristian','Romeo','Milan','Reid','Cyrus','Leonel','Joaquin','Ari','Odin','Orion',
'Ezequiel','Gideon','Daxton','Warren','Casey','Anderson','Spencer','Karson','Eduardo','Chance','Fernando',
'Raymond','Bradley','Cesar','Wade','Prince','Julius','Dakota','Kade','Koa','Raiden','Callan','Hector','Onyx',
'Remy','Ricardo','Edwin','Stephen','Kane','Saint','Titus','Desmond','Killian','Sullivan','Mario','Jay',
'Kamari','Luciano','Royal','Zyaire','Marco','Wilder','Russell','Nasir','Rylan','Archie','Jared','Gianni',
'Kashton','Kobe','Sergio','Travis','Marshall','Iker','Briggs','Gunner','Apollo','Bowen','Baylor','Sage',
'Tyson','Kyle','Oakley','Malik','Mathias','Sean','Armani','Hugo','Johnny','Sterling','Forrest','Harvey',
'Banks','Grady','Kameron','Jake','Franklin','Lawson','Tanner','Eden','Jaziel','Pablo','Reed','Pedro','Zayne',
'Royce','Edgar','Ibrahim','Winston','Ronin','Leonidas','Devin','Damon','Noel','Rhys','Clark','Corbin','Sonny',
'Colter','Esteban','Erik','Baker','Adan','Dariel','Kylo','Tripp','Caiden','Frank','Solomon','Major','Memphis',
'Quinn','Dax','Hank','Donovan','Finnegan','Nehemiah','Andy','Camilo','Asa','Jeffrey','Santino','Isaias','Jaiden',
'Kian','Fabian','Callen','Ruben','Alexis','Emanuel','Francis','Garrett','Kendrick','Matthias','Wells','Augustus',
'Jasiah','Alijah','Alonzo','Koda','Collin','Ford','Frederick','Jaxton','Kohen','Troy','Kason','Seth','Denver',
'Kyson','Ares','Raphael','Bodie','Sylas','Uriel','Zaiden','Shiloh','Lewis','Kieran','Marcos','Bo','Shepherd',
'Philip','Zaire','Gregory','Princeton','Roberto','Leland','Eithan','Moshe','Johnathan','Lucca','Kenzo','Mack',
'Porter','Kolton','Kaison','Valentino','Saul','Shane','Jamari','Rocco','Kylan','Deacon','Dalton','Moses','Callahan',
'Tadeo','Makai','Amiri','Rowen','Drew','Jalen','Kylian','Sutton','Dominick','Reece','Rodrigo','Soren','Kasen','Ridge',
'Zachariah','Jamir','Peyton','Omari','Trevor','Morgan','Izaiah','Alessandro','Kaysen','Enrique','Marcelo','Sincere',
'Lucian','Leandro','Armando','Braylen','Jayson','Julio','Lawrence','Cassius','Raul','Jase','Mohammad','Zain','Jayceon',
'Jonas','Ronald','Ayaan','Rio','Allen','Bruce','Mohamed','Dorian','Maximilian','Keegan','Shawn','Yusuf','Pierce','Ariel',
'Ander','Conor','Conrad','Phillip','Arjun','Roy','Moises','Arturo','Johan','Gerardo','Atreus','Nikolai','Braylon','Samson',
'Hezekiah','Kayce','Scott','Gunnar','Jamison','Samir','Keanu','Ledger','Jaime','Finnley','Cannon','Colby','Nikolas',
'Emmitt','Kamden','Miller','Boone','Hamza','Ocean','Mac','Anakin','Brixton','Roland','Huxley','Zeke','Danny','Marvin',
'Otis','Albert','Clay','Emir','Boston','Bruno','Lionel','Ozzy','Taylor','Jamie','Augustine','Chaim','Krew','Rayan',
'Alden','Bellamy','Amos','Drake','Davis','Dustin','Corey','Ahmad','Conner','Gustavo','Layton','Abram','Axton',
'Chandler','Azariah','Reese','Benson','Tru','Case','Trey','Mauricio','Westin','Gage','Reign','Creed','Mylo',
'Dennis','Quentin','Madden','Rome','Julien','Sam','Zaid','Marcel','Maximo','Layne','Ahmed','Kannon','Quincy',
'Yosef','Aarav','Lennon','Ryland','Skyler','Chris','Eliam','Kareem','Kyree','Dario','Donald','Fletcher','Darius',
'Duke','Rayden','Salem','Vicente','Vincenzo','Cayson',
    

];
function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}
const sos = [
    '1','2','3','4','5','6','7','8','9'
];
function getRandomso(){
    const randomIndex = Math.floor(Math.random() * sos.length);
    return sos[randomIndex];
}

// Định nghĩa hàm typing ở đây
function typing() {
    for (let i = 0; i < 10; i++) {
        const randomName = getRandomName();
        typeWord(randomName);
        typeWord(' ');
        
        us(1); // Để tạo khoảng thời gian giữa các lần gõ tên
    }
}

// Export các hàm để có thể sử dụng trong tập tin khác

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







module.exports = {
    check,us,tap,
    typeZ,typeX,typeC,typeV,typeB,typeN,typeM,
    typeA,typeS,typeD,typeF,typeG,typeH,typeJ,typeK,typeL,
    typeQ,typeW,typeE,typeR,typeT,typeY,typeU,typeI,typeO,typeP,

    so0,so1,so2,so3,so4,so5,so6,so7,so8,so9,
    gotu,
    typeWord,
    getRandomName,
    names,
    typing,
    getRandomso,
    sos,
    rd,

    
};
