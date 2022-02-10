const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`nam nay la nam bao nhieu?`, (x) => LeapYear(x))
let x;
function LeapYear(x){
    if((x % 4 == 0|| x % 400 == 0) && x % 100 !==0){
        console.log("nam nay la nam nhuan");
    }else
    console.log("nam nay khong phai nam nhuan");
}
// LeapYear(2014)