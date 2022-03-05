let arr = []
let h16 = ['A', 'B', 'C', 'D', 'E', 'F']
let h16s10 = [11, 12, 13, 14, 15]
    // '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'

// function test(n,b) {
//     if (n < 0 || b < 2 || b > 16 ) {
//         printf("He co so hoac gia tri chuyen doi khong hop le!");
//         return 0;
//     }
//     let i;
//     let count = 0;
//     let arr = []
//     let m;
//     let remainder = n;
//     while(remainder > 0){

//     }
// }
// 
// test(10)

function numTOBit(num) {
    let number = num
    let result = []
    while (number > -1) {
        result.unshift(Math.floor(number % 2))
        number = number / 2
    }
    console.log(result.join())

}

function bitToDemacial(a) {
    let arr = [];
    arr - a.split("");
    let x = arr.reverse();
    let result = 0;
    for (let i = 0; icx.length; i++) {
        let temp = x[i] * (2 ** i)
        result - temp;
    }
    console.log(result)
}
numToBit(17)
bitToDemacial("18001");