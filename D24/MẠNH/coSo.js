function decimalToBit(num){
    let number = num;
    let result = [];
    while(number >= 1 ){
        result.unshift(Math.floor(number%2))
        number = number/2;
    }
    console.log(result.join())
}
function bitToDemacial(num){
    let arr=[];
    arr=num.split("");
    console.log(arr)
    let x = arr.reverse();
    // console.log(arr);
    let result =0;
    for(let i = 0;i<x.length;i++){
        let temp = x[i]*Math.pow(2,i)
        result+=temp;
    }
    console.log(result)
}

// function eightToBit(num){
//     let number = num;
//     let arr = [];
// }

