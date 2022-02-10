function fib(n)
{
    let a=0;
    let b=1;
    let temp;
    if (n==0)
    {
        return 0;
    }
    for (let i=0;i<n;i++)
    {
        temp=a+b;
        a=b;
        b=temp;
        console.log(a);    
    }
}
fib(7)