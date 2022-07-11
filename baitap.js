/*Mo hinh 3 khoi
 Bài 1
* Đầu vào 
*- lương 1 ngày: 100.000
*- số ngày làm
*
*xử lý: 
* tiền lương nhân viên= lương 1 ngày* số ngày làm
* Đầu ra 
* -kết quả tiền lương nhân viên
*/
var luong = 100.000;
var songay = 30;
var luongnhanvien =luong * songay;
console.log("bài 1");
console.log( "Tiền lương nhân viên :" + luongnhanvien.toFixed(3));
/*Mo hinh 3 khoi
  Bài 2
* Đầu vào 
*- 5 số thực
*xử lý: 
*  - tính tổng 5 số thực
*  - lấy tổng 5 số thực chia cho 5
* -Đầu ra
* giá trị trung bình 5 số thực
*/
var so1=2
var so2=3
var so3=4
var so4=5
var so5=8
var tong= so1+so2+so3+so4+so5;
var trungbinh=tong/5;
console.log("bài 2");
console.log("giá trị trung bình 5 số thực: "+ trungbinh);

/*Mo hinh 3 khoi
  Bài 3
* Đầu vào 
*- Gía USD
*- Tiền cần đổi
*xử lý: 
*  - quy đổi: tiền usd = tiền cần đổi * 23.500 VND 
* -Đầu ra
* giá trị trung bình 5 số thực
*/
var VND=23.500;
var USD=5;
var tien = VND *USD;

console.log("bài 3");
console.log("Tiền sau quy đổi: " + tien.toFixed(3) +" VND");
/*Mo hinh 3 khoi
  Bài 3
* Đầu vào 
*- chiều dài
*- chiều rộng
*xử lý: 
*  - diện tích = chiều dài * chiều rộng
*  - chu vi= (chiều dài + chiều rộng )*2
* -Đầu ra
*  - diện tích và chu vi
*/
var chieudai=9;
var chieurong=3;
var dientich = chieudai*chieurong;
var chuvi= (chieudai+chieurong)*2;
console.log("bài 4");
console.log("Diện tích: "+ dientich);
console.log("Chu vi: "+ chuvi);
/**
 * đầu vào
 * Tạo biến n có 2 chữ số
 * 
 * Xử lý

 * -Tạo biến hangChuc= Math.floor(n%100/10)
 * -Tạo biến hangDV= n % 10
 * 
 * Đầu ra
 * Thông báo kết quả 
 * 
 */
 var n=56;
 var hangChuc =Math.floor(n%100/10);
 var hangDV =n%10;
 var tong= hangChuc + hangDV;
 console.log("bài 5");
 console.log("Tổng 2 ký số : " + tong);
