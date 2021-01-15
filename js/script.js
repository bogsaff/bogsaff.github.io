var joins = [];
var controlLamp = 0;
var chandelier = 0;
var lamp1 = 0, lamp2 = 0, lamp3 = 0;
var kettle=0;
var bell=0;
var tv=0;
var lamp5= 0, lamp6=0;
var recordplayer=0;
var vacuumcleaner=0;
var floorlamp=0;
//Проверяет соединен ли А с Б
function checkDuplicates(L, R) {
    for (var i = 0; i < joins.length; i++) {
        if (joins[i].L == L && joins[i].R == R) {
            return true;
        }
    }
    return false;
}
function isSocket2728busy() {
    if((checkDuplicates(23,28)
        && checkDuplicates(24, 27))
        || (checkDuplicates(12, 27)
        && checkDuplicates(11, 28))) {
        return true;
    }return false;
}
function isSocket1314busy() {
    console.log("http://localhost:63342/GAME.Project/index.html");
        if((checkDuplicates(11,14)
        && checkDuplicates(12,13))
        || checkDuplicates(13, 24)
        || checkDuplicates(14, 23)) {
            console.log("1314busy");
        return true;
    }else {
            console.log("not busy 1314");
        }
    return false;
}

// Функция которая проверяет занят ли разъем(ы)
// больше 1 одинакова номера
// 3(4), 4(4), 11(2), 12(2), 13(2), 14(2),
// 17(5), 18(5), 23(2), 24(2), 27(2), 28(2), 31(2), 32(2), 33(2), 34(2),
// 37(5), 38(5), 47(2), 48(2), 49(3), 50(3), 51(2), 52(2), 57(2),
// 58(2), 63(2), 64(2), 67(3),  68(3), 69(2), 70(2),
function isJoinBusy(socket){
    let number = 0;
    for (let i = 0; i < joins.length; i++) {
        if (joins[i].L == socket) number++;
        if (joins[i].R == socket) number++;
    }
    if (socket == 1 && number < 1) return false;
    if (socket == 2 && number < 1) return false;
    if (socket == 3 && number < 4) return false;
    if (socket == 4 && number < 4) return false;
    if (socket == 5 && number < 1) return false;
    if (socket == 6 && number < 1) return false;
    if (socket == 7 && number < 1) return false;
    if (socket == 8 && number < 1) return false;
    if (socket == 9 && number < 1) return false;
    if (socket == 10 && number < 1) return false;
    if (socket == 11 && number < 2) return false;
    if (socket == 12 && number < 2) return false;
    if (socket == 13 && number < 2) return false;
    if (socket == 14 && number < 2) return false;
    if (socket == 15 && number < 1) return false;
    if (socket == 16 && number < 1) return false;
    if (socket == 17 && number < 4) return false;
    if (socket == 18 && number < 4) return false;
    if (socket == 19 && number < 1) return false;
    if (socket == 20 && number < 1) return false;
    if (socket == 21 && number < 1) return false;
    if (socket == 22 && number < 1) return false;
    if (socket == 23 && number < 2) return false;
    if (socket == 24 && number < 2) return false;
    if (socket == 25 && number < 1) return false;
    if (socket == 26 && number < 1) return false;
    if (socket == 27 && number < 2) return false;
    if (socket == 28 && number < 2) return false;
    if (socket == 29 && number < 1) return false;
    if (socket == 30 && number < 1) return false;
    if (socket == 31 && number < 2) return false;
    if (socket == 32 && number < 2) return false;
    if (socket == 33 && number < 2) return false;
    if (socket == 34 && number < 2) return false;
    if (socket == 35 && number < 1) return false;
    if (socket == 36 && number < 1) return false;
    if (socket == 37 && number < 5) return false;
    if (socket == 38 && number < 5) return false;
    if (socket == 39 && number < 1) return false;
    if (socket == 40 && number < 1) return false;
    if (socket == 41 && number < 1) return false;
    if (socket == 42 && number < 1) return false;
    if (socket == 43 && number < 1) return false;
    if (socket == 44 && number < 1) return false;
    if (socket == 45 && number < 1) return false;
    if (socket == 46 && number < 1) return false;
    if (socket == 47 && number < 2) return false;
    if (socket == 48 && number < 2) return false;
    if (socket == 49 && number < 3) return false;
    if (socket == 50 && number < 3) return false;
    if (socket == 51 && number < 2) return false;
    if (socket == 52 && number < 2) return false;
    if (socket == 53 && number < 1) return false;
    if (socket == 54 && number < 1) return false;
    if (socket == 55 && number < 1) return false;
    if (socket == 56 && number < 1) return false;
    if (socket == 57 && number < 2) return false;
    if (socket == 58 && number < 2) return false;
    if (socket == 59 && number < 1) return false;
    if (socket == 60 && number < 1) return false;
    if (socket == 61 && number < 1) return false;
    if (socket == 62 && number < 1) return false;
    if (socket == 63 && number < 2) return false;
    if (socket == 64 && number < 2) return false;
    if (socket == 65 && number < 1) return false;
    if (socket == 66 && number < 1) return false;
    if (socket == 67 && number < 3) return false;
    if (socket == 68 && number < 3) return false;
    if (socket == 69 && number < 2) return false;
    if (socket == 70 && number < 2) return false;
    if (socket == 71 && number < 1) return false;
    if (socket == 72 && number < 1) return false;
    if (socket == 73 && number < 1) return false;
    if (socket == 74 && number < 1) return false;
    return true;
}
//номера исползуемые только 1 раз
// 1,2,5,6,7,8,9,10,15,16,19,20,21,22,25,26,29,30, 35,36,39,40,41,42,43,44,45,46,53,54,55,56,59,60,61,62,65,66,71,72,73,74

function join() {
    var L = parseInt(document.getElementById("L").value);
    var R = parseInt(document.getElementById("R").value);

    // проверка на заполненность полей
    if (isNaN(L) && isNaN(R)) {
        document.getElementById("errorText").innerHTML ="Поля не заполнены";
        return;
    } else if (isNaN(L) || isNaN(R)) {
        document.getElementById("errorText").innerHTML ="Поле не заполнено";
        return;
    }

    if (L > R) {
        var tmp = L; // temporary
        L = R;
        R = tmp;
    }

    // проверяем что номер гнезда в диапазоне 1..74
    if (L < 1 || L > 74 || R < 1 || R > 74) {
        document.getElementById("errorText").innerHTML ="Гнезда должны быть в диапазоне 1-74";
        return;
    }

    // проверка на занятость гнезда
    if ( isJoinBusy(L) == true) {
        document.getElementById("errorText").innerHTML ="Гнездо " + L + " занято!";
        return;
    }

    if ( isJoinBusy(R) == true) {
        document.getElementById("errorText").innerHTML ="Гнездо " + R + " занято!";
        return;
    }

    // проверка на занятость розеток
    if(R==27||R==28) {
        if (isSocket2728busy()) {
            //alert("Эта розетка уже занята");
            //console.log("Эта розетка уже занята");
            document.getElementById("errorText").innerHTML = "Розетка 2728 занята";
            return;
        }
    }
    if(R==13 || R==14 || L==13 || L==14) {
        if (isSocket1314busy()) {
            document.getElementById("errorText").innerHTML = "Розетка 1314 занята";
            return;
        }
    }
    // проверка на соединение гнезда с самим собой
    if (L == R) {
        alert('Гнезда должны быть разные!');
        return;
    }
    if (checkDuplicates(L, R) == true) {
        alert("Такое соединение уже есть!");
        return;
    }

    if (L > R) {
        alert('Вводить числа от меньшего к большему!');
        return;
    }

    joins.push({"L": L, "R": R});
    document.getElementById("L").value = '';
    document.getElementById("R").value = '';

    // добавляем новое соединение на экран
    var pairs = document.getElementById("connections").innerHTML;
    pairs = pairs + ('<div class="oval">' + L + '-' + R + "</div>");
    document.getElementById("connections").innerHTML = pairs;
    //фокус обратно на первое поле
    document.getElementById("L").focus();

    document.getElementById("errorText").innerHTML ="";
}

// Функция вызывается когда удаляем соединение
function deleteJoin() {

    var L = parseInt(document.getElementById("Ld").value);
    var R = parseInt(document.getElementById("Rd").value);
    // L = 3 R = 2
    if (L > R) {
        var tmp = L; // temporary
        L = R;
        R = tmp;
    }
    if (isNaN(L) && isNaN(R)) {
        alert('Поля не заполнены!');
        document.getElementById("L").style.borderColor = "red";
        return;
    } else if (isNaN(L) || isNaN(R)) {
        alert('Поле не заполнено!');
        return;
    }
    // проверка на соединение гнезда с самим собой
    if (L == R) {
        alert('Гнезда должны быть разные!');
        return;
    }
    if (checkDuplicates(L, R) != true) {
        alert("Такого соединения не существует!");
        return;
    }

    // deleting..
    var index = -1;
    for (let i = 0; i < joins.length; i++) {
        if (L == joins[i].L && R == joins[i].R){
            index = i;
        }
    }
    if (index > -1) {
        joins.splice(index, 1);
        // deleting from screen
        var connections = document.getElementById("connections");
        connections.innerHTML="";
        for (let i = 0; i < joins.length; i ++) {
            connections.innerHTML +=  ('<div class="oval">' + joins[i].L + '-' + joins[i].R + "</div>");
        }


        document.getElementById("Ld").value = '';
        document.getElementById("Rd").value = '';

    }

    switchOff();
    // Прокликиваем все кнопки, на случай, если что включено
    mainBtnHandler();
    btnchandelier();
    btnKettle();
    btnGerland();
    btnBell();
    btnTv();
    btnChandelier2();
    btnRecordpleer();
    btnVacuumCleaner();
    btnFloorlamp();
}

// Отключение всего!
function switchOff() {
    // выключаем контрольную лампочку
    document.getElementById("controlLamp").style.backgroundColor = "black";
    controlLamp = 0;

    // выключаем все остальное
    document.getElementById("chandelier").style.backgroundColor = "black";
    //chandelier = 0;

    document.getElementById("linkAudio").pause();
    document.getElementById("linkAudio").currentTime = 0;
    //kettle=0;

    document.getElementById('lamp1').style.backgroundColor='black';
    document.getElementById('lamp2').style.backgroundColor='black';
    document.getElementById('lamp3').style.backgroundColor='black';
    //lamp1=0;
    //lamp2=0;
    //lamp3=0;

    document.getElementById("linkAudio2").pause();
    document.getElementById("linkAudio2").currentTime = 0;
    //bell=0;

    document.getElementById("tv").pause();
    document.getElementById("tv").currentTime = 0;
    //tv=0;

    document.getElementById('lamp5').style.backgroundColor='black';
    document.getElementById('lamp6').style.backgroundColor='black';
    //lamp5=0;
    //lamp6=0;

    document.getElementById("recordplayer").pause();
    document.getElementById("recordplayer").currentTime = 0;
    //recordplayer=0;

    document.getElementById("vacuumcleaner").pause();
    document.getElementById("vacuumcleaner").currentTime = 0;
    //vacuumcleaner=0;

    document.getElementById('floorlamp').style.backgroundColor='black';
    //floorlamp=0;
}

// Button #1
function mainBtnHandler() {
    if (controlLamp == 0
        && checkDuplicates(1, 5) && checkDuplicates(3, 6) && checkDuplicates(2, 4) && checkDuplicates(3, 7) && checkDuplicates(4, 8)) {
        document.getElementById("controlLamp").style.backgroundColor = "red";
        controlLamp = 1;

    } else {
        switchOff();
    }


    // Прокликиваем все кнопки, на случай, если что включено
    //btnchandelier();
    if (controlLamp == 1) {
        if (chandelier == 1) {
            document.getElementById("chandelier").style.backgroundColor = "yellow";
        }

        if (kettle == 1) {
            document.getElementById("linkAudio").play();
        }

        if (lamp1 == 1) {
            document.getElementById('lamp1').style.backgroundColor='green';
            document.getElementById('lamp2').style.backgroundColor='blue';
            document.getElementById('lamp3').style.backgroundColor='purple';
        }

        if (bell == 1) {
            document.getElementById("linkAudio2").play();
        }

        if (tv == 1) {
            document.getElementById("tv").play();
        }

        if (lamp5 == 1) {
            document.getElementById('lamp5').style.backgroundColor='yellow';
            document.getElementById('lamp6').style.backgroundColor='yellow';
        }

        if (recordplayer == 1) {
            document.getElementById("recordplayer").play();
        }

        if (vacuumcleaner == 1) {
            document.getElementById("vacuumcleaner").play();
        }

        if (floorlamp == 1) {
            document.getElementById('floorlamp').style.backgroundColor='yellow';
        }
    }

}

// Button #3
function btnchandelier() {
    if (chandelier == 0 && controlLamp == 1
        && checkDuplicates(3, 17) && checkDuplicates(4, 18) && checkDuplicates(17, 19) && checkDuplicates(16, 20)
        && checkDuplicates(15, 18)) {
        document.getElementById("chandelier").style.backgroundColor = "yellow";
        chandelier = 1;

    } else {
        document.getElementById("chandelier").style.backgroundColor = "black";
        chandelier = 0;
    }

}

function btnKettle() {
    if (controlLamp == 1 && kettle == 0
        && checkDuplicates(3, 17) && checkDuplicates(4, 18) && (checkDuplicates(14, 17)
        && checkDuplicates(13, 18) && checkDuplicates(13, 24) && checkDuplicates(14, 23)) || (checkDuplicates(17, 28)
        && checkDuplicates(18, 27) && checkDuplicates(23, 28) && checkDuplicates(24, 27)) && checkDuplicates(21, 23)
        && checkDuplicates(22, 26) && checkDuplicates(24, 25)
    ) {
        document.getElementById("linkAudio").play();
        kettle=1;
    }else {
        document.getElementById("linkAudio").pause();
        document.getElementById("linkAudio").currentTime = 0;
        kettle=0
    }
}

function btnGerland() {
    if (lamp1==0 && lamp2==0 && lamp3==0
        && controlLamp==1 &&  checkDuplicates(3, 17) && checkDuplicates(4, 18) && ((checkDuplicates(14, 17)
        && checkDuplicates(13, 18) && checkDuplicates(11,14) && checkDuplicates(12,13))||
        (checkDuplicates(17,28) && checkDuplicates(18, 27) && checkDuplicates(11,28) && checkDuplicates(12,27) )
        ) && checkDuplicates(9,11) && checkDuplicates(10,34) && checkDuplicates(32,34) && checkDuplicates(30, 32) &&
        checkDuplicates(29,31) && checkDuplicates(31,33) && checkDuplicates(12,33)) {
        document.getElementById('lamp1').style.backgroundColor='green';
        document.getElementById('lamp2').style.backgroundColor='blue';
        document.getElementById('lamp3').style.backgroundColor='purple';
        lamp1=1;
        lamp2=1;
        lamp3=1;
    }else {
        document.getElementById('lamp1').style.backgroundColor='black';
        document.getElementById('lamp2').style.backgroundColor='black';
        document.getElementById('lamp3').style.backgroundColor='black';
        lamp1=0;
        lamp2=0;
        lamp3=0;
    }
}

function btnBell() {
    if (controlLamp == 1 && bell == 0
        && checkDuplicates(3,37) && checkDuplicates(4,38) && checkDuplicates(37,41) && checkDuplicates(40,42) &&
        checkDuplicates(38,39)) {

        document.getElementById("linkAudio2").play();
        bell=1;
    }else {
        document.getElementById("linkAudio2").pause();
        document.getElementById("linkAudio2").currentTime = 0;
        bell=0;
    }
}

function btnTv() {
    if (controlLamp == 1 && tv == 0
        && checkDuplicates(3,37) && checkDuplicates(4,38)&&((checkDuplicates(37,68)&&checkDuplicates(38,67)
        &&checkDuplicates(47,68)&&checkDuplicates(48,67))||(checkDuplicates(37,49)&& checkDuplicates(38,50)
        &&checkDuplicates(47,49)&&checkDuplicates(48,50)))&&checkDuplicates(45,47)&&checkDuplicates(44,46)
        &&checkDuplicates(43,48)) {

        document.getElementById("tv").play();
        tv=1;
    }else {
        document.getElementById("tv").pause();
        document.getElementById("tv").currentTime = 0;
        tv=0;
    }
}

function btnChandelier2() {
    if (lamp5==0 && lamp6==0
        && controlLamp==1 &&checkDuplicates(3,37)&&checkDuplicates(4,38)&&checkDuplicates(35,37)
        && checkDuplicates(36,57)&&checkDuplicates(57,59)&&checkDuplicates(58,60)&&checkDuplicates(38,58)) {
        document.getElementById('lamp5').style.backgroundColor='yellow';
        document.getElementById('lamp6').style.backgroundColor='yellow';
        lamp5=1;
        lamp6=1;
    }else {
        document.getElementById('lamp5').style.backgroundColor='black';
        document.getElementById('lamp6').style.backgroundColor='black';
        lamp5=0;
        lamp6=0;
    }
}

function btnRecordpleer() {
    if (controlLamp == 1 && recordplayer == 0
        && checkDuplicates(3,37) && checkDuplicates(4,38)&&((checkDuplicates(37,68)&&checkDuplicates(38,67)
        &&checkDuplicates(51,68)&&checkDuplicates(52,67))||(checkDuplicates(37,49)&& checkDuplicates(38,50)
        &&checkDuplicates(49,51)&&checkDuplicates(50,52))) && checkDuplicates(51,55) && checkDuplicates(54,56)
        && checkDuplicates(52,53)) {

        document.getElementById("recordplayer").play();
        recordplayer=1;
    }else {
        document.getElementById("recordplayer").pause();
        document.getElementById("recordplayer").currentTime = 0;
        recordplayer=0;
    }
}

function btnVacuumCleaner() {
    if (controlLamp == 1 && vacuumcleaner == 0
        && checkDuplicates(3,37) && checkDuplicates(4,38)&&((checkDuplicates(37,68)&&checkDuplicates(38,67)
        &&checkDuplicates(63,68)&&checkDuplicates(64,67))||(checkDuplicates(37,49)&& checkDuplicates(38,50)
        &&checkDuplicates(49,63)&&checkDuplicates(50,64))) && checkDuplicates(61,63)&&checkDuplicates(62,66)
        &&checkDuplicates(64,65)) {

        document.getElementById("vacuumcleaner").play();
        vacuumcleaner=1;
    }else {
        document.getElementById("vacuumcleaner").pause();
        document.getElementById("vacuumcleaner").currentTime = 0;
        vacuumcleaner=0;
    }
}

function btnFloorlamp() {
    if (floorlamp==0 && controlLamp==1
        && checkDuplicates(3,37) && checkDuplicates(4,38)&&((checkDuplicates(37,68)&&checkDuplicates(38,67)
        &&checkDuplicates(68,69)&&checkDuplicates(67,70))||(checkDuplicates(37,49)&& checkDuplicates(38,50)
        &&checkDuplicates(49,69)&&checkDuplicates(50,70)))&&checkDuplicates(69,71)&&checkDuplicates(72,74)
        && checkDuplicates(70,73)) {
        document.getElementById('floorlamp').style.backgroundColor='yellow';
        floorlamp=1;
    }else {
        document.getElementById('floorlamp').style.backgroundColor='black';
        floorlamp=0;
    }}

//Обработчик:Добавление соединений в массив
document.getElementById('btn1').addEventListener('click', join);
// обработчик удаления
document.getElementById('btn1d').addEventListener('click', deleteJoin);
document.getElementById('btn-main').addEventListener('click', mainBtnHandler);
document.getElementById('btn-chandelier').addEventListener('click', btnchandelier);
document.getElementById('btn-kettle').addEventListener('click', btnKettle);
document.getElementById('btn-garland').addEventListener('click', btnGerland);
document.getElementById('btn-bell').addEventListener('click', btnBell);
document.getElementById('btn-tv').addEventListener('click', btnTv);
document.getElementById('btn-chandelier2').addEventListener('click', btnChandelier2);
document.getElementById('btn-recordplayer').addEventListener('click', btnRecordpleer);
document.getElementById('btn-vacuumcleaner').addEventListener('click', btnVacuumCleaner);
document.getElementById('btn-floorlamp').addEventListener('click', btnFloorlamp);