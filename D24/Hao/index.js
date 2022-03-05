// function binaryToDecimal(n)
// {
//     let num = n;
//     let dec_value = 0;
//     let base = 1;
 
//     let temp = num;
//     while (temp) {
//         let last_digit = temp % 10;
//         temp = Math.floor(temp / 10);
 
//         dec_value += last_digit * base;
 
//         base = base * 2;
//     }
 
//     // return dec_value;
//     console.log(dec_value);
// }
// binaryToDecimal(1010)

function decimalToBinary(N)
{
 
 
    var B_Number = 0;
    var cnt = 0;
    while (N != 0)
    {
        var rem = N % 2;
        var c = Math.pow(10, cnt);
        B_Number += rem * c;
        N = parseInt(N/2);
        cnt++;
    }
    return B_Number;
}

console.log(decimalToBinary(10));

    