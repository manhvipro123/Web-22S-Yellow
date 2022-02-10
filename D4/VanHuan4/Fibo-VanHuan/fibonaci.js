let arr=[];
function fibo(n){
    let n1=0;
    let n2=1;
    for(let i=0;i<n;i++){
        // console.log(n2);
        let tong=n1+n2;
        n1=n2;
        n2=tong;
        arr.push(n1);
    }
}
fibo(5);
console.log(arr);

