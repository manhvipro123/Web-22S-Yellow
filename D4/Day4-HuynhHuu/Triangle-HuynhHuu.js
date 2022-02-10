function triangle(a,b,c)
{
    if (a==b && b ==c )
    {
        console.log("Day la tam giac deu");
    } else if (Math.round(a*a)==b*b+c*c || Math.round(b*b)==a*a+c*c || Math.round(c*c)==a*a+b*b)
    {
        if(a==b || b==c || b==a ){
            console.log("Day la tam giac vuong can");
        } else 
        {
            console.log("Day la tam giac vuong");
        }
    }
    else if (a==b || b==c || a==c)
    {
        console.log("Day la tam giac can");
    } 
    else if(a!=0 && b!=0 && c!=0)
    {
        console.log("Day la tam giac thuong");
    } else {
        console.log("Day khong phai tam giac");
    }
}

triangle(0.5,1,4);
//console.log(Math.round(5.65685424949238*5.65685424949238));