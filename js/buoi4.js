console.log('buoi4')


// Toán tử so sánh > , < , <= , >= , == ,!=  => Boolean
// so sánh bé hơn
console.log(3<4);// true
console.log(5<4);// true- dúng | false : sai
console.log(5==5)// true
console.log(5!=4)//true

var num1 = 10;
var num2 = 12;

console.log(num2<num1)//12<10 => false
num1+=num1//num1 =20;
//unit test
console.log(num2<num1, num2 + " < " +num1)//12<20 => true

// debugger;
 num1 = 7
 num2 = num1++ - 4
 num2+=4
 console.log(num1==num2++,num1 , num2) // 2 false

 num1= 2;
 var num3= '2';

 console.log(num1==num3,num1+" == " +num3)// true
 //so sánh == và === khác nhau
 //==  -> chỉ so sánh nội dung bên trong
 //=== => vừa so sánh nội dung bên trong và so sánh kiểu dữ liệu
 console.log(num1===num3,num1+" = " +num3,typeof num1 + " === " + typeof num3)// false

 // ! toán  tử phủ định
 console.log(true)//=> true
 console.log(!true)//=> false
 console.log(!false)//=> true
 console.log(!(num1===num3)) //false => true

 // && => 
 console.log(true&&true)//=> true
 console.log(true&&false)//=> false
 console.log(false&&true)//=> false
 console.log(false&&false)//=> false

 console.log(1<2&&2<3)// true

 var kpi = 500;//mong muống kpi đạt 500 mươi đc thương 500 == 501 
// debugger;
 kpi = 300;
//  kpi = 501
//  console.log(kpi>=500)//true => đạt kpi
                        //false => sếp la !

//? if([điều kiện]: phép toán so sánh) cấu trúc rẽ nhánh 
if(kpi>=500){
    //điều kiện đúng => code trong này chạy
    console.log('nhật đã đạt kpi')
}
else{
    console.warn('sếp la !')// => log một cảnh báo 
    console.error('sếp la !')//=> log một lỗi 
}