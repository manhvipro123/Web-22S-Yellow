let a;
let num=1;
let num2=0;
function fibo(a){
    let temp;
    for(let i=1;i<=a;i++){

        temp= num+num2;
        num2=num;
        num=temp;
        console.log(num2);

    }
}
fibo(10);