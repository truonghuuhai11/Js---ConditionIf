// Kiểm tra số nguyên dương hay âm
function kiemTraSo() {
    let num = parseInt(document.getElementById("num1").value);
    let result;

    if (num > 0) {
        result = `${num} là số nguyên dương.`;
    } else if (num < 0) {
        result = `${num} là số nguyên âm.`;
    } else {
        result = `${num} là số không.`;
    }

    document.getElementById("result1").innerHTML = result;
}

// Kiểm tra số chia hết cho 3 hay 5
function kiemTraChia() {
    let num = parseInt(document.getElementById("num2").value);
    let result = '';

    if (num % 3 === 0) {
        result += `${num} chia hết cho 3. `;
    }
    if (num % 5 === 0) {
        result += `${num} chia hết cho 5. `;
    }
    if (result === '') {
        result = `${num} không chia hết cho 3 hoặc 5.`;
    }

    document.getElementById("result2").innerHTML = result;
}

// Kiểm tra số ngày trong tháng
function kiemTraThang() {
    let month = parseInt(document.getElementById("month").value);
    let days;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            days = "28 hoặc 29 (năm nhuận)";
            break;
        default:
            days = "Tháng không hợp lệ!";
    }

    document.getElementById("result3").innerHTML = `Tháng ${month} có ${days} ngày.`;
}
// Giải phương trình bậc 2: ax^2 + bx + c = 0
function giaiPhuongTrinhBac2() {
    let a = parseFloat(document.getElementById("heSoA").value);
    let b = parseFloat(document.getElementById("heSoB").value);
    let c = parseFloat(document.getElementById("heSoC").value);
    let ketQua = "";

    if (a === 0) {
        ketQua = "Không phải phương trình bậc 2";
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            ketQua = "Phương trình vô nghiệm";
        } else if (delta === 0) {
            let x = -b / (2 * a);
            ketQua = `Phương trình có nghiệm kép: x = ${x}`;
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            ketQua = `Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`;
        }
    }

    document.getElementById("resultPhuongTrinhBac2").innerHTML = ketQua;
}

// Kiểm tra 3 cạnh có phải tam giác không
function kiemTraTamGiac() {
    let a = parseFloat(document.getElementById("canhA").value);
    let b = parseFloat(document.getElementById("canhB").value);
    let c = parseFloat(document.getElementById("canhC").value);
    let ketQua = (a + b > c && a + c > b && b + c > a) ? "Ba cạnh này tạo thành tam giác" : "Ba cạnh này không tạo thành tam giác";
    document.getElementById("resultTamGiac").innerHTML = ketQua;
}