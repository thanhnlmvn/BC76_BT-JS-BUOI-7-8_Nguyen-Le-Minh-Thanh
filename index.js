let arrSoN = [];

// Input số N
document.getElementById('nhapSoN').onclick = function () {
  let soN = document.getElementById('soN').value * 1;
  arrSoN.push(soN);
  console.log(arrSoN);
  document.getElementById('arrSoN').innerHTML = `Số N đang có là: ${arrSoN}`;
};

// Bài 1: Tính tổng dương
document.getElementById('bT1').onclick = function () {
  let tongKq = 0;
  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] >= 0) {
      tongKq += arrSoN[i];
    }
  }
  console.log(tongKq);
  document.getElementById('kQ1').innerHTML = `Tổng số dương: ${tongKq} `;
};

// Bài 2: đếm số
document.getElementById('bT2').onclick = function () {
  let demSo = 0;
  for (let i = 0; i <= arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      demSo++;
    }
  }
  console.log(demSo);
  document.getElementById('kQ2').innerHTML = `Số dương: ${demSo} `;
};

//Bài 3:Tìm số nhỏ nhất
document.getElementById('bT3').onclick = function () {
  let min = 0;
  arrSoN.sort((a, b) => a - b);
  console.log(arrSoN);
  min = arrSoN[0];
  document.getElementById('kQ3').innerHTML = `Số nhỏ nhất: ${min} `;
};

//Bài 4: Tìm số dương nhỏ nhất
document.getElementById('bT4').onclick = function () {
  let arrMinDuong = [];
  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      arrMinDuong.push(arrSoN[i]);
    }
  }
  if (arrMinDuong.length === 0) {
    document.getElementById('kQ4').innerHTML = `Không có số dương trong mảng`;
  } else {
    arrMinDuong.sort((a, b) => a - b);
    document.getElementById(
      'kQ4'
    ).innerHTML = `Số dương nhỏ nhất: ${arrMinDuong[0]}`;
  }
};

// Bài 5: Tìm số chẵn cuối cùng
document.getElementById('bT5').onclick = function () {
  let soChanCuoiCung = 0;
  for (let i = 0; i <= arrSoN.length; i++) {
    if (arrSoN[i] % 2 == 0) {
      soChanCuoiCung = arrSoN[i];
    }
    document.getElementById(
      'kQ5'
    ).innerHTML = `Số chẵn cuối cùng: ${soChanCuoiCung}`;
  }
};

//Bài 6: Đổi chỗ
function viTri(arr, x, y) {
  let viTri1 = arr[x];
  arr[x] = arr[y];
  arr[y] = viTri1;
}

document.getElementById('bT6').onclick = function () {
  let viTri1 = document.getElementById('viTri1').value * 1;
  let viTri2 = document.getElementById('viTri2').value * 1;
  viTri(arrSoN, viTri1, viTri2);
  document.getElementById('kQ6').innerHTML = `Mảng sau khi đổi là : ${arrSoN}`;
};

//Bài 7: Sắp xếp
document.getElementById('bT7').onclick = function () {
  arrSoN.sort((a, b) => a - b);
  document.getElementById('kQ7').innerHTML = `Mảng sau khi sắp xếp: ${arrSoN}`;
};

// Bài 8: Tìm số nguyên tố đầu tiên
function soNguyenTo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

document.getElementById('bT8').onclick = function () {
  let soNguyenToDauTien = null;
  for (let i = 0; i < arrSoN.length; i++) {
    if (soNguyenTo(arrSoN[i])) {
      soNguyenToDauTien = arrSoN[i];
      break;
    }
  }
  if (soNguyenToDauTien !== null) {
    document.getElementById(
      'kQ8'
    ).innerHTML = `Số nguyên tố đầu tiên là: ${soNguyenToDauTien}`;
  } else {
    document.getElementById(
      'kQ8'
    ).innerHTML = `Không tìm thấy số nguyên tố trong mảng`;
  }
};

//Bài 9: Đếm số nguyên
let arrSoNguyen = [];
document.getElementById('nhapSoNguyen').onclick = function () {
  let soNguyen = document.getElementById('soNguyen').value * 1;
  arrSoNguyen.push(soNguyen);
  console.log(arrSoNguyen);
  document.getElementById('arrSoNguyen').innerHTML = arrSoNguyen;
};

document.getElementById('bT9').onclick = function () {
  let count = 0;
  for (let i = 0; i < arrSoNguyen.length; i++) {
    if (Number.isInteger(arrSoNguyen[i])) {
      count++;
    }
  }
  document.getElementById(
    'kQ9'
  ).innerHTML = `Số lượng số nguyên trong mảng là: ${count}`;
};

//Bài 10: So sánh số lượng số âm và dương
document.getElementById('bT10').onclick = function () {
  let soDuong = 0;
  let soAm = 0;

  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      soDuong++;
    } else if (arrSoN[i] < 0) {
      soAm++;
    }
  }

  // So sánh số lượng số dương và số âm
  if (soDuong > soAm) {
    document.getElementById('kQ10').innerHTML = `Số dương > Số âm`;
  } else if (soDuong < soAm) {
    document.getElementById('kQ10').innerHTML = `Số dương < Số âm`;
  } else {
    document.getElementById('kQ10').innerHTML = `Số dương = Số âm`;
  }
};
