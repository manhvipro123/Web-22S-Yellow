const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Nhập năm: ", function (answer) {
//   console.log(`Oh, so your name is ${answer}`);
  namNham(answer);
  rl.close();
});
function namNham(n){
if((n%4==0 && n%100!=0)||n%400==0){
console.log("Đây là năm nhận");
}
else{
console.log("Đây không phải là năm nhận");
}
}



