function val(c)
{
    if (c >= '0'.charCodeAt() &&
        c <= '9'.charCodeAt())
        return (c - '0'.charCodeAt());
    else
        return (c - 'A'.charCodeAt() + 10);
}
 
// Function to convert a
// number from given base
// 'b' to decimal
function toDeci(str, b_ase)
{
    let len = str.length;
     
    let power = 1;
     
  
    let num = 0;
    let i;

    for(i = len - 1; i >= 0; i--)
    {
         
       
        if (val(str[i].charCodeAt()) >= b_ase)
        {
            document.write("Invalid Number");
            return -1;
        }
 
        num += val(str[i].charCodeAt()) * power;
        power = power * b_ase;
    }
    return num;
}
 
// Driver code
let str = "1010";
let b_ase = 2;
console.log(toDeci(str, b_ase));

function reVal(num)
{
    if (num >= 0 && num <= 9)
        return String.fromCharCode(num + 48);
    else
        return String.fromCharCode(num - 10 + 65);
}
function fromDeci(base1, inputNum)
{
    let s = "";

    while (inputNum > 0)
    {
        s += reVal(inputNum % base1);
        inputNum = parseInt(inputNum / base1, 10);
    }
    let res = s.split('');

    // Reverse the result
    res.reverse();
    return res.join("");
}
 
let inputNum = 10, base1 = 16;
console.log("Equivalent of " + inputNum +
                        " in base "+base1+" is " +
                        fromDeci(base1, inputNum));