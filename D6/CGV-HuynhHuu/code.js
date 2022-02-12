let group=[
    {
        photourl: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/fast_and_furious_nine_ver12_480x.progressive.jpg?v=1619716827',
        name: 'Fast and Furious 9',
        book: 'Đặt vé',
    },
    {
        photourl: 'https://ecdn.game4v.com/g4v-content/uploads/2021/11/26091930/NWH-poster-1-game4v-1637893169-6.jpg',
        name: 'Spider-man: NWH',
        book: 'Đặt vé',
    },
    {
        photourl: 'https://m.media-amazon.com/images/I/71gyLVWIfIL._AC_SL1032_.jpg',
        name: 'Doctor Strange',
        book: 'Đặt vé',
    },
    {
        photourl:'https://upload.wikimedia.org/wikipedia/vi/8/8c/L%E1%BB%ABa_%C4%91%E1%BB%83u_g%E1%BA%B7p_l%E1%BB%ABa_%C4%91%E1%BA%A3o_poster.jpg',
        name: 'Lừa đểu gặp lừa đảo',
        book: ' Đặt vé'
    },
    {
        photourl: 'https://m.media-amazon.com/images/I/81bvllshbDL._AC_SY679_.jpg',
        name: 'Cá sấu lên bờ',
        book: 'Đặt vé',
    },
    {
        photourl: 'https://m.media-amazon.com/images/I/51O5trs3FsL._AC_.jpg',
        name: 'Quỷ quyệt 3',
        book: 'Đặt vé',
    },
];

let container = document.getElementsByClassName("listflim");
for (let i=0;i<group.length;i++){

    let itemBox=document.createElement("div");
    itemBox.className="flim";
    itemBox.style="margin-top: 50px";
    let img = document.createElement("img");
    img.src=group[i].photourl;
    img.id="photo";
    let name = document.createElement("p");
    name.innerHTML=group[i].name;
    name.style = "font-size: 20px;text-align:center;color: white"
    let book = document.createElement("p");
    book.innerHTML=group[i].book;
    book.style = "font-size: 10px; color: red;text-align:center"
    let button = document.createElement("button");
    button.onclick="alert('Đặt vé thành công)";
    button.innerHTML="Đặt vé";
    button.id="butt";
    if(i==5){
        itemBox.appendChild(document.createElement("br")); 
    }
    itemBox.appendChild(photourl);
    itemBox.appendChild(name);
    itemBox.appendChild(book);
    itemBox.appendChild(button);
    container[0].appendChild(itemBox);
}
// header 
let p1= document.getElementById("p1").innerHTML="TUYỂN DỤNG",
    p2= document.getElementById("p2").innerHTML="TIN MỚI VÀ ƯU ĐÃI",
    p3= document.getElementById("p3").innerHTML="VÉ CỦA TÔI",
    p4= document.getElementById("p4").innerHTML="ĐĂNG NHẬP/ ĐĂNG KÝ",
// TAKSBAR
    logo=document.getElementById("logo").src="cgvlogo.png",
    p5= document.getElementById("p5").innerHTML="PHIM",
    p6= document.getElementById("p6").innerHTML="RẠP CGV",
    p7= document.getElementById("p7").innerHTML="THÀNH VIÊN",
    p8= document.getElementById("p8").innerHTML="CULTUREPLEX",
    buyticket=document.getElementById("buyticket").src="mua-ve_ngay.png",
// img
    contact=document.getElementById("contact").src="Taskbar.png",
//main poster
    mainposter=document.getElementById("mposter").src="mposter.jpg",
//content
    p9=document.getElementById("movie").innerHTML="MOVIE SELECTION",
//footer
    footer=document.getElementById("footer").src="footer.png";

    