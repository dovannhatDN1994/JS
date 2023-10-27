// Mình đang DOM = > truy suất tới thẻ có id là LuongVe
// innerHTML: lầ thuộc tính nội dung của thẻ => gán giá trị bằng dấu = 
document.getElementById("LuongVe").innerHTML = "200000";
document.getElementById("h2 ").innerHTML = "DN10"
// thường id là một giá trị không đổi hoặc thay nên khai gia trị là hằng số 
const idTheH1 =  "LuongVe";
const idTheH2 = "h2 "

document.getElementById(idTheH1).innerHTML = "600000"
document.getElementById(idTheH2).innerHTML = "BootCamp"

const idImg = "image";
// idTheH2 = "the 2";
// document.getElementById(idImg) đang DOM tới thẻ img có id là image
// => src để thay thế 1 đường link hình mới
document.getElementById(idImg).src = "https://picsum.photos/id/120/800/700"

// trước khi thay đổi giá trị của thuộc alt
console.log(document.getElementById(idImg).alt)

document.getElementById(idImg).alt = "Đây là hình ảnh !"
// sau khi thay đổi alt
console.log(document.getElementById(idImg).alt)

const nodeTheImg = document.getElementById(idImg);
nodeTheImg.src = "https://picsum.photos/id/12/1000/800"
nodeTheImg.alt = "Đây là hình của dev"
console.log("🚀 ~ file: buoi2.js:28 ~ nodeTheImg:", nodeTheImg)

//Thử dom tới thẻ input và thay thé thuộc tính placeholder thành login usename
const nodeInput = document.getElementById("inputId")
// dom -> node : object 
nodeInput.placeholder= "Login username"

console.log(nodeInput.value)

// hàm - khai báo hàm bằng từ khoá function
function Login (){
    console.log("Hàm khỏi chạy",nodeInput.value);
}

//để đoạn code trong hàm chạy => gọi hàm => những đoạn code bên trong hàm được thục thi
// Login()
// Login()
// Login()
// Login()
// Login()
var luong = 20000;
var heSoLuong = 10;
var tongluong = 0;
function tinhLuong (){
    tongluong = heSoLuong * luong
}

console.log(tongluong)//0'
tinhLuong()
console.log('luong sau khi tính toán',tongluong)

function layGiaTriInput (){
   console.log( document.getElementById("inputId").value)
}

// Làm sao để khi người dùng nhắn button login thì console log ra value người dùng nhập vào ngay thời điểm 
// c1: dom tới thẻ button và gán hàm cho thuộc tính onclick

document.getElementById("button").onclick = layGiaTriInput

// c2 : ngay trên html, các bạn gọi thuộc tính onclick và truyền cái function các mong muốn khi click thì nó chạy


//Bài tập bật tắt đèn

/**
tạo hàm để bật đen => dom tới img vầ thay thế src của img đó
gán cái hàm vừa tạo vào onclick của button bật đèn
ngược với tắt ...
*/

//Hàm để đổi hình img sang hình bật đèn
function turnOn (){
    document.getElementById("imgDen").src ="./img/pic_bulbon.gif"
}
function turnOff (){
    document.getElementById("imgDen").src ="./img/pic_bulboff.gif"
}

document.getElementById("batDen").onclick = turnOn
document.getElementById("tatDen").onclick = turnOff

