const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Nhap nam ban muon check?`, (year) => checkYear(year))
function checkYear(y){

    if(y%4==0 && y%100!=0 || y%100==0 && y%400==0){
        console.log("Day la nam nhuam");
    } else 
        console.log("Day la nam kh nhuan");
}

// year(1918);