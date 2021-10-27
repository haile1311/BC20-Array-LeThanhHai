// nhập n
var dataArr = [];
function addData() {
    var number = document.getElementById("addNum").value;
    dataArr.push(number);
    console.log(dataArr);
    var content = "";
    for (var i = 0; i < dataArr.length; i++) {
        content += (dataArr[i] + " ");
    }
    document.getElementById("arr").innerHTML = content;
}
document.getElementById("addBtn").onclick = addData;


// câu 1

function sumArray() {
    var sum = 0;
    for (var i = 0; i < dataArr.length; i++) {
        if (dataArr[i] > 0) {
            sum += Number(dataArr[i]);
        }
    }
    document.getElementById("cau1").value = "Tổng: " + sum;
}
document.getElementById("btnTong").onclick = sumArray;

// câu 2

function countArray() {
    var count = 0;

    for (var i = 0; i < dataArr.length; i++) {
        if (dataArr[i] > 0) {
            count++;
        }
    }
    document.getElementById("cau2").value = "Tổng số: " + count;
}
document.getElementById("btnDem").onclick = countArray;

// câu 3
function minArray() {
    var viTri = 0;
    var min = dataArr[viTri];
    for (var i = 0; i < dataArr.length; i++) {
        if (min > dataArr[i]) {
            min = dataArr[i];
            viTri = i;
        }
    }
    document.getElementById("cau3").value = "Số nhỏ nhất: " + min;
}
document.getElementById("btnTimMin").onclick = minArray;

// câu 4
function minDuongArray() {
    var viTri = 0;
    var minDuong = dataArr[viTri];
    for (var i = 0; i < dataArr.length; i++) {
        if (minDuong > dataArr[i] && dataArr[i] > 0) {
            minDuong = dataArr[i];
            viTri = i;
        }
    }
    document.getElementById("cau4").value = "Số dương nhỏ nhất: " + minDuong;
}
document.getElementById("btnTimMinDuong").onclick = minDuongArray;

// câu 5
function lastChan() {
    var lastChan = "";
    for (var i = 0; i < dataArr.length; i++) {
        if (dataArr[i] % 2 == 0) {
            lastChan = dataArr[i];
        } else {
            lastChan = -1;
        }
    }
    document.getElementById("cau5").value = "Số chẵn cuối cùng: " + lastChan;
}
document.getElementById("btnTimChan").onclick = lastChan;

// câu 6
function swap() {
    var swap1 = document.getElementById("swap1").value;
    var swap2 = document.getElementById("swap2").value;
    var temp = dataArr[swap1];
        dataArr[swap1] = dataArr[swap2];
        dataArr[swap2] = temp; 
    document.getElementById("cau6").value = "Mảng sau khi đổi: " + dataArr;
}
document.getElementById("btnSwap").onclick = swap;

// câu 7
function sxTang() {
    var newArr = [];
    for (var i = 0; i < dataArr.length; i++) {
        newArr.push(dataArr[i]);
    }

    for (var i = 0; i < newArr.length; i++) {
        for (var j = 0; j < newArr.length - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
                var temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
    }
    document.getElementById("cau7").value = "Mảng sau khi đổi: " + newArr;
}
document.getElementById("btnSapXep").onclick = sxTang;

// câu 8
function soNT() {
    var soNT = "";
    for (var i = 0; i < dataArr.length; i++) {
        if (dataArr[i] == 2) {
            soNT = 2;
            break;
        } else if (dataArr[i] % 2 != 0 && dataArr[i] % Math.sqrt(dataArr[i]) != 0) {
            soNT = dataArr[i];
            break;
        } else {
            soNT = -1;
        }
    }
    document.getElementById("cau8").value = "Số nguyên tố đầu tiên: " + soNT;
}
document.getElementById("btnTimNT").onclick = soNT;

// câu 9
function countPrime() {
    var newNum = document.getElementById("newNumber").value;
    var countNum = dataArr.length;
    if (Number.isInteger(newNum)) {
        dataArr[i].push(newNum);
        console.log(dataArr)
        countNum++;
    } else {
        countNum;
    }
    document.getElementById("cau9").value = "Có " + countNum + " số nguyên sau khi thêm";
}
document.getElementById("btnDemSN").onclick = countPrime;

// câu 10
function countArray2() {
    var countAm = 0;
    for (var i = 0; i < dataArr.length; i++) {
        if (dataArr[i] < 0) {
            countAm++;
        }
    }
    var countDuong = 0;
    for (var i = 0; i < dataArr.length; i++) {
        if (dataArr[i] > 0) {
            countDuong++;
        }
    }

    if (countAm < countDuong) {
        document.getElementById("cau10").value = "Số âm < Số dương";
    } else if (countAm > countDuong) {
        document.getElementById("cau10").value = "Số âm > Số dương";
    } else {
        document.getElementById("cau10").value = "Số âm = Số dương";
    }
}
document.getElementById("btnSS").onclick = countArray2;
