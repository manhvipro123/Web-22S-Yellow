let hinh = document.getElementById("fo4").src = "./images/fo4.png";

let p1= document.getElementById("p1").innerHTML = "Trang chủ";
let p2= document.getElementById("p2").innerHTML = "Vòng quay may mắn";
let p3= document.getElementById("p3").innerHTML = "Nick Randow";
let p4= document.getElementById("p4").innerHTML = "Đăng nhập";
let p5= document.getElementById("p5").innerHTML = "Đăng ký";
let group =[
    {
        photourl:"https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2020/04/10/Esports/doihinh_vietnam.png",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình Việt Nam mùa VietNamBest",
        price: "Giá cũ:6000000VNĐ",
        atm:   "Giá mới:5000000VNĐ",
    }, 
    {
        photourl:"https://o.rada.vn/data/image/2020/04/01/Xay-dung-doi-hinh-Manchester-City-trong-game-FIFA-Online-4.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình ManCity mùa 2017-2018", 
        price: "Giá cũ:500000VNĐ",
        atm:   "Giá mới:2000000VNĐ",
    },
    {
        photourl:"https://aulitci.vn/wp-content/uploads/2021/07/xay-dung-team-real-fo4-7-768x597.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình Real Madrid 3.0", 
        price: "Giá cũ:3000000VNĐ",
        atm:   "Giá mới:3000000VNĐ",
    },
    {
        photourl:"http://dothethao.net.vn/wp-content/uploads/2020/08/xay-dung-doi-hinh-team-color-ac-milan-fo4.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình AC Milan 2003-2004", 
        price: "Giá cũ:3000000VNĐ",
        atm:   "Giá mới:3000000VNĐ",
    },
    {
        photourl:"https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2020/04/10/Esports/doihinh_vietnam.png",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình Việt Nam mùa VietNam",
        price: "Giá cũ:6000000VNĐ",
        atm:   "Giá mới:5000000VNĐ",
    }, 
    {
        photourl:"https://aulitci.vn/wp-content/uploads/2021/08/team-barca-fo4-6-479x400.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình Barcelona", 
        price: "Giá cũ:500000VNĐ",
        atm:   "Giá mới:2000000VNĐ",
    },
    {
        photourl:"https://cdn.hongphucsport.com/files/285/doihinh-acmilan-6017c6a613320.png",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình Inter Milan", 
        price: "Giá cũ:3000000VNĐ",
        atm:   "Giá mới:3000000VNĐ",
    },
    {
        photourl:"https://fo4vn.com/storage/article/2019/05/7-10.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình Mancity 2011-2012", 
        price: "Giá cũ:3000000VNĐ",
        atm:   "Giá mới:3000000VNĐ",
    },
    {
        photourl:"https://i.ytimg.com/vi/2Fw1OzWxPjU/maxresdefault.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình ManUnited 2007-2008", 
        price: "Giá cũ:3000000VNĐ",
        atm:   "Giá mới:3000000VNĐ",
    },
    {
        photourl:"https://aulitci.vn/wp-content/uploads/2021/07/doi-hinh-chelsea-fo4-1-7.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình Chelsea", 
        price: "Giá cũ:3000000VNĐ",
        atm:   "Giá mới:3000000VNĐ",
    },
    {
        photourl:"https://dothethao.net.vn/wp-content/uploads/2021/11/xay-dung-doi-hinh-team-color-tuyen-bi-fo4-1.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình đội tuyển Bỉ", 
        price: "Giá cũ:3000000VNĐ",
        atm:   "Giá mới:3000000VNĐ",
    },
    {
        photourl:"https://footballguru.org/wp-content/uploads/2020/07/Team-Phap-Fo4-voi-doi-hinh-toi-uu-nhat-voi-Zidane-ICON.png",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình đội tuyển Pháp", 
        price: "Giá cũ:3000000VNĐ",
        atm:   "Giá mới:3000000VNĐ",
    },
    {
        photourl:"https://cdnmedia.webthethao.vn/uploads/img/files/images/fullsize/2019/08/13/Esports/teamanh.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình đội tuyển Anh", 
        price: "Giá cũ:3000000VNĐ",
        atm:   "Giá mới:3000000VNĐ",
    },
    {
        photourl:"http://dothethao.net.vn/wp-content/uploads/2021/11/xay-dung-doi-hinh-team-color-duc-fo4.jpg",
        BanAcc: "Tài khoản:FO4#214625478", 
        name: "Đội hình đội tuyển Đức", 
        price: "Giá cũ:3000000VNĐ",
        atm:   "Giá mới:3000000VNĐ",
    },
];
let container = document.getElementsByClassName('container');
for(let i = 0; i<group.length; i++){
    let itemBox = document.createElement("div");
    itemBox.className = 'item';
    let img = document.createElement("img");
    img.src = group[i].photourl;
    img.style = "width:300px;height:200px";
    let acc = document.createElement("h2");
    acc.innerHTML = group[i].BanAcc;
    acc.style = "font-size: 20px";
    let name =document.createElement("h3");
    name.innerHTML=group[i].name;
    name.style = "font-size: 20px";
    let price = document.createElement("h4");
    price.innerHTML = group[i].price;
    let button = document.createElement("button");
    button.style="font-size: 20px;background-color:blue";
    button.innerHTML="Mua Nick";
    button.id="Mua";
    price.style = "font-size: 20px";
    let atm =document.createElement("h5");
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
let p6= document.getElementById("p6").innerHTML = "GIỚI THIỆU WEBBANACCFO4.COM";
let p7= document.getElementById("p7").innerHTML = "Web bán acc fifa online 4 uy tin|Bán Nick theo đội hình câu lạc bộ hoặc đổi tuyển 100% giá rẻ";
let p8= document.getElementById("p8").innerHTML = "Giới thiệu";
let p9= document.getElementById("p9").innerHTML = "Hướng dẫn mua acc fifa";
let p10= document.getElementById("p10").innerHTML = "Liên hệ/Góp ý";

let p11= document.getElementById("p11").innerHTML = "Hotline:01234567(Admin)";
let p12= document.getElementById("p12").innerHTML = "Email:webnbanaccfo4@gmail.com";
let p13= document.getElementById("p13").innerHTML = "Hỗ trợ :24h";

let p14= document.getElementById("p14").innerHTML = "Dịch vụ khác";
let p15= document.getElementById("p15").innerHTML = "Xây dựng đội hình fo4 theo yêu cầu";
let p16= document.getElementById("p16").innerHTML = "Hỗ trợ bảo mật thông tin acc";