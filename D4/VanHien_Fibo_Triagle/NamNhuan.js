const readline = require("readline");
const ac = new AbortController();
const signal = ac.signal;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Mời bạn nhập năm ", { signal }, (answer) => {
  NamNhuan(answer);
  rl.close();
});
function NamNhuan(n){
    if((n%4==0)&&(n%100!=0)||(n%400==0)){
        console.log("Năm nhuận");
    }else if(n%19==0){
        console.log("Năm nhuận âm lịch");
    }else if((n%19==3)||(n%19==6)||(n%19==9)||(n%19==11)||(n%19==14)||(n%19==17)){
        console.log("Năm nhuận và có tháng nhuận");
    }
    else{
        console.log("Không là năm nhuận")
    }
};