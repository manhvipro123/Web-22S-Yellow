let a;
let b;
let c;
function triangle(a,b,c){
    if(a<b+c && b<a+c && c<a+b){
        if(a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b)
        {
            console.log("tam giac vuong");
        }
        else if(a==b,b==c){
        console.log("tam giac deu")
        }
        else if(a==b,b==c,c==a){
        console.log("tam giac can");
        }
        else
        console.log("khong phai tam giac");
    }
}
triangle (3,3,3)