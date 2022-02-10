// let a=3,b=4,c=5;
function tamGiac(a,b,c)
{
    if( a<b+c && b<a+c && c<a+b ){
        if(a==b && b==c )
            console.log("Đây là tam giác đều");
        else if(a==b || b==c||a==c)
            console.log("Đây là tam giác cân");
        else if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b)
            console.log("Đây là tam giác vuông");
        else
            console.log("Đây là tam giác thường");
        }
    else
        console.log("Ba cạnh a, b, c không phải là ba cạnh của một tam giác");
}
tamGiac(3,4,3);