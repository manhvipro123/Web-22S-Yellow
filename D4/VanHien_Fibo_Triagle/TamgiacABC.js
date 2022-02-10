let a;
let b;
let c;
function Tamgiac(a,b,c){
    if((a+b>c)&&(a+c>b)&&(b+c>a)){
        console.log("Tam giác");
    }
    if((a==b)&&(a==c)&&(b==c)){
        console.log("Tam giác đều");
    }else if((a==b)||(a==c)||(b==c)){
        console.log("Tam giác cân");
    }else if((a*a==b*b+c*c)||(b*b==a*a+c*c)||(c*c==a*a+b*b)){
        console.log("Tam giác vuông");
    }else if(((a==b)&&(a*a==b*b+c*c))||((a==c)&&(b*b==a*a+c*c))||((b==c)&&(c*c==a*a+b*b))){
        console.log("Tam giác vuông cân");
    }else if((a*a>b*b+c*c)||(b*b>a*a+c*c)||(c*c>a*a+b*b)){
        console.log("Tam giác tù");
    }else{
        console.log("Không là tam giác");
    }
}
Tamgiac(2,2,2);