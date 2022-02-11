let group =[
    {
        photourl:"https://shopaccfo4.com/uploads/e44ddb4565eded631005257a32733559bandicam 2022-01-23 17-42-04-314.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "EA SPORT FIFA ONLINE 4",
        price: "Card:6000000",
        atm:   "ATM:5000000",
    }, 
    {
        photourl:"https://shopaccfo4.com/uploads/9254faa17c475da794ef9742195b91efbandicam 2022-02-11 10-37-59-041.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "EA SPORT FIFA ONLINE 4", 
        price: "Card:500000",
        atm:   "ATM:5000000",
    },
    {
        photourl:"https://shopaccfo4.com/uploads/963e2fe3d1f4a1ef425364834011a93bbandicam 2022-01-11 23-20-17-381.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "EA SPORT FIFA ONLINE 4", 
        price: "Card:3000000",
        atm:   "ATM:3000000",
    }

];
let container = document.getElementsByClassName('container');
for(let i = 0; i<group.length; i++){
    let itemBox = document.createElement("div");
    itemBox.className = 'item';
    let img = document.createElement("img");
    img.src = group[i].photourl;
    img.style = "width:300px;height:200px";
    let acc = document.createElement("div");
    acc.innerHTML = group[i].BanAcc;
    let name =document.createElement("h3");
    name.innerHTML=group[i].name;
    name.style = "font-size: 20px";
    let price = document.createElement("h4");
    price.innerHTML = group[i].price;
    let button = document.createElement("button");
    price.style = "font-size: 20px";
    let atm =document.createElement("h3");
    atm.innerHTML=group[i].atm;
    atm.style = "font-size: 20px";
    itemBox.appendChild(img);
    itemBox.appendChild(name);
    itemBox.appendChild(acc);
    itemBox.appendChild(price);
    itemBox.appendChild(atm);

    itemBox.appendChild(document.createElement("br"));
    itemBox.appendChild(button);
    container[0].appendChild(itemBox);
}
console.log(container[0]);