console.log('buoi3');
//Tính tiền tiếp
/**
 * khối 1: Dữ liệu đầu vào
 * tienThanhToan - tổng tiền thanh toán
 * phanTramTienTip - phần trăm để tính tiền tip
 * soNguoiShare - chia số tiền tip cho bao nhiêu người
 */

/**
 * Khối 2: Tiến trình 
 * lấy dữ liệu từ form
 * 
 * khai báo biến cho từng dữ liệu
 * 
 * tinh tổng số tiền tip cần chia
 * 
 * tính sô tiền típ cần chia cho mỗi người
 */



/**
 * khôi 3: Dữ liệu đầu ra
 * tienTip - số tiền cần tip của mỗi người 
 */


/**
 *
 * 
 * 
 * khai báo biến cho từng dữ liệu
 * 
 * tinh tổng số tiền tip cần chia
 * 
 * tính sô tiền típ cần chia cho mỗi người
 */


//lấy dữ liệu từ form 
// tạo hàm 

function tinhTienTinh (){
    //Phạm vi trong hàm
    //dùng hàm của máy Number([giá trị chuỗi số/ biến]) => sang dạng number
    var tienThanhToan = Number(document.getElementById("inptTongTien").value);
    console.log("🚀 ~ file: buoi3.js:47 ~ tinhTienTinh ~ tienThanhToan:", tienThanhToan)
    // phanTramTienTip = document.getElementById("selectForm").value - lấy value khi người dùng nhập vào
    var phanTramTienTip = Number(document.getElementById("selectForm").value)
    console.log("🚀 ~ file: buoi3.js:50 ~ tinhTienTinh ~ phanTramTienTip:", phanTramTienTip)
    
    var soNguoiShare= Number(document.getElementById("inptShare").value)
    console.log("🚀 ~ file: buoi3.js:53 ~ tinhTienTinh ~ soNguoiShare:", soNguoiShare)


    // tinh tổng số tiền tip cần chia
    var soTienTip = phanTramTienTip * tienThanhToan /100
    // tính tiền cho mỗi người 
    var soTienTipMoiNguoi = soTienTip/soNguoiShare


    //Hiển thị kết quẩ lên màn hình ứng dụng
    //*Cách tạo thẻ bên thông thẻ có id là ketQua
    document.getElementById('ketQua').innerHTML = 
    // "<strong>Hello Mọi người </strong>"
    " Tip amount! <br/>" + "<sup>$</sup>"+ soTienTipMoiNguoi + "<br/>  mỗi người"   

    //kết thúc hàm
}
document.getElementById("btnTinhTien").onclick = tinhTienTinh

//Hướng tạo thẻ trong js

//!Khai báo thẻ - node
    //document.createElement([tag-name]) => giúp tạo thẻ node html
   var node = document.createElement('h1')
   console.log("🚀 ~ file: buoi3.js:77 ~ node:", node)
   node.innerHTML = "Hello mọi người"
   //thêm style cho thẻ node html
//    node.style = "color:red;"
   node.style.color = 'red';

//!Hiển thị thẻ node lên ...
// document.body.appendChild giúp hiển bên trong nội dung của body html
    document.body.appendChild(node);
    //Để hiển thị h1 bên trong thẻ div có id là div1
    document.getElementById("div1").appendChild(node)
    console.log(node)

    // lưu ý: khi sử dụng document.createElement để tạo thẻ node và appendChild để thêm phần tử vừa vào vị trí cần thêm thì còn code cuối cùng gọi lại appendChild thì thẻ node đó mới xuất hiện ở đó chứ ko phải chỗ khác
    // khi muốn tạo thẻ ở nhìu thì cần thay id của thẻ node đok

    // c2 - sử dụng innerHTML

    // + Dom tới thẻ cần thêm thẻ 
    // + Gán thẻ đok cho innerHTML
    var theH1 = "<h1>Hello CyberSoft</h1>"
    document.getElementById("div1").innerHTML = theH1
    document.getElementById("div2").innerHTML = theH1
    document.getElementById("div3").innerHTML = theH1

    //C2 giúp thêm một thẻ cho nhiều chỗ thay vì dùng c1

    //Bai tập Tạo 1 button , mỗi lần click button thì nó sinh ra 1 thẻ div có background là màu xanh

    var content = ""
    content += content
    // "" -> `` - nằm phía dưới nut ESC = ""

    //Tiến trình 
    // tạo sự kiên khi click
    //Tạo thẻ node => thêm id và style cho thẻ
    //Hiển thị nó lên màn hình
var count =1

function themThe (){
    var nodeCretea = document.createElement('div');
    nodeCretea.id = 'div'+count
    count++;
    nodeCretea.style= "height:300px;background:blue;"
    

    console.log(nodeCretea)

    document.body.appendChild(nodeCretea)
}

// var content = "<div style="background:blue;height:300px"></div>"
var content = '<div style="background:blue;height:300px"></div> <br/>'
debugger;// để bật break debug code
function themThe2(){
    // document.body.appendChild(content)
    document.getElementById("chuaNoiDung").innerHTML = content
    content+=content
    console.log(content)
}

// document.getElementById("btnTaoThe").onclick = themThe
document.getElementById("btnTaoThe").onclick = themThe2