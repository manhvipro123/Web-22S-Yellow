let num=0,num1=1,tong=0;
function Fibo(n){
    for(let i=0;i<n;i++){
        console.log(num);
        tong = num+num1;
        num=num1;
        num1=tong;
    }
}
Fibo(5);