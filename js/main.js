var form = document.getElementById("form");
var arrNum = [];
var arrSoNguyen = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var themSo = document.getElementById("inputNum").value * 1;
    var domArr = document.getElementById("domArr");
    arrNum.push(themSo);
    form.reset();
    domArr.innerHTML = ` <strong>👉</strong> ` + arrNum;
})

function tinhSoDuong(arrNum) {
    var tongDuong = 0;
    var arrNumLength = arrNum.length;
    var ketQuaBai1 = document.getElementById("ketQuaBai1");
    for (var i = 0; i < arrNumLength; i++){
        if(arrNum[i] > 0) {
            tongDuong += arrNum[i] ;
        }
    }
    return ketQuaBai1.innerHTML = tongDuong;
}

function demSoDuong(arrNum) {
    var ketQuaBai2 = document.getElementById("ketQuaBai2");
    var flag = 0
    
    for (i in arrNum) {
        if (arrNum[i] > 0){
            flag += 1;
        }
    }

    ketQuaBai2.innerHTML = `<strong>👉</strong> Tổng số dương: ${flag}`;

}
function soBeNhat(arrNum) {
    return arrNum.reduce((min, element) => {
        return element < min ? element : min;
    }, arrNum[0]);
}

function minNum(arrNum) {
    var ketQuaBai3 = document.getElementById("ketQuaBai3");
    if (arrNum.length === 0) {
        ketQuaBai3.innerHTML = "<strong>👉</strong> Mảng rỗng.";
        return;
    }
    
    var ketQuaSoBe = soBeNhat(arrNum);

    ketQuaBai3.innerHTML = `<strong>👉</strong> Số nhỏ nhất: ${ketQuaSoBe}`;
}

function timSoDuongNhoNhat(arrNum) {
    var ketQuaBai4 = document.getElementById("ketQuaBai4");
    var soDuongArr = arrNum.filter(element => element > 0);
    if (soDuongArr.length === 0){
        ketQuaBai4.innerHTML = `<strong>👉</strong> Không có số dương trong mảng`;
    }else {
        var soDuongNhoNhat = soBeNhat(soDuongArr);
        ketQuaBai4.innerHTML = `<strong>👉</strong> Số nhỏ nhất: ${soDuongNhoNhat}`;
    }
}

function timSoChanCuoi(arrNum) {
    var soChanArr = arrNum.filter(element => element % 2 == 0);
    var len = soChanArr.length;
    var soChanCuoi = soChanArr[len-1];
    console.log('soChanArr :>> ', soChanArr);
    console.log('len :>> ', len);
    console.log('soChanCuoi :>> ', soChanCuoi);

    document.getElementById("ketQuaBai5").innerHTML =`<strong>👉</strong> Số chẵn cuối cùng: ${soChanCuoi}`;
}

function doiCho(arrNum) {
    var viTri1 = document.getElementById("viTri1").value * 1 - 1;
    var viTri2 = document.getElementById("viTri2").value * 1 - 1;

   // Lấy giá trị của hai phần tử
//    var temp = arrNum[viTri1];
//    arrNum[viTri1] = arrNum[viTri2];
//    arrNum[viTri2] = temp;

    [arrNum[viTri1], arrNum[viTri2]] = [arrNum[viTri2], arrNum[viTri1]];
    console.log('arrNum :>> ', arrNum);
    document.getElementById("ketQuaBai6").innerHTML =`<strong>👉</strong> ${arrNum}`;
}

function bubbleSort(arrNum) {
    var len = arrNum.length;
    for (var i = 0 ; i < len; i++){
        for (var j = len - 1; j > i; j--)
        {
            if (arrNum[j-1] > arrNum[j]) {
                var temp = arrNum[j-1];
                arrNum[j-1] = arrNum[j];
                arrNum[j] =temp;
            }
        }
    }
    document.getElementById("ketQuaBai7").innerHTML = `<strong>👉</strong> ${arrNum}`
}

function kiemTraNguyenTo(num) {
    // Kiểm tra xem num có phải là số nguyên tố không
    if (num <= 1) return false; // Số nguyên tố phải lớn hơn 1
    if (num === 2) return true; // 2 là số nguyên tố duy nhất là số chẵn

    // Kiểm tra từ 2 đến căn bậc hai của num
    var sqrtNum = Math.sqrt(num);
    for (var i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) {
            return false; // Nếu có ước số thì không phải số nguyên tố
        }
    }
    return true;
}

function soNguyeToDauTien(arrNum) {
    var soNguyenTo = arrNum.filter(element => kiemTraNguyenTo(element));
    var minNguyenTo = soNguyenTo[0];
    if(soNguyenTo.length > 0){
        document.getElementById("ketQuaBai8").innerHTML = `<strong>👉</strong> Số nguyên tố đầu tiên ${minNguyenTo}`;
    } else {
        document.getElementById("ketQuaBai8").innerHTML = `<strong>👉</strong> Không có số nguyên tố`;
    }
}

function themSoNguyen() {
    var num = document.getElementById("num").value * 1;
    var domSoNguyen = document.getElementById("domSoNguyen");

    arrSoNguyen.push(num);
    domSoNguyen.innerHTML = `<strong>👉</strong> ${arrSoNguyen}`;

}

function laSoNguyen(num) {
    // Kiểm tra xem num có phải là số nguyên không
    return Number.isInteger(num);
}

function demSoNguyen(arrSoNguyen) {
    var count = 0;
    for(i in arrSoNguyen) {
        if(laSoNguyen(arrSoNguyen[i])){
            count ++;
        }
    }
    document.getElementById("ketQuaBai9").innerHTML = `<strong>👉</strong> Có ${count} nguyên`;
}

function soSanh(arrNum) {
    var soDuongArr = arrNum.filter(element => element > 0);
    var soAmArr = arrNum.filter(element => element < 0);

    if (soDuongArr.length > soAmArr.length) {
        document.getElementById("ketQuaBai10").innerHTML = `<strong>👉</strong> Số dương > Số âm`;
    } else if(soDuongArr.length < soAmArr.length)   {
        document.getElementById("ketQuaBai10").innerHTML = `<strong>👉</strong> Số âm > Số dương`;
    } else {
        document.getElementById("ketQuaBai10").innerHTML = `<strong>👉</strong> Số Dương = Số âm`;
    }

}