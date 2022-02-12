let group=[
{
    photourl: 'https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg',
    name: "PUBG mobile",
    price: 350.000,
},
{
    photourl: 'https://static-cdn.jtvnw.net/ttv-boxart/489635-272x380.jpg',
    name: "ARK",
    price: 500.000,
},
{
    photourl: 'https://m.media-amazon.com/images/M/MV5BNjY2NWU1ODMtY2VkNy00NDIyLTgzNzctMDY3MjIxOWU5ZmMxXkEyXkFqcGdeQXVyNDAzNzA0MzE@._V1_FMjpg_UX1000_.jpg',
    name: "Conan Exiles",
    price: 200.000,
},
{
    photourl: 'https://upload.wikimedia.org/wikipedia/vi/1/1c/Call_of_Duty_Black_Ops_4_official_box_art.jpg',
    name: "Call of Duty 4",
    price: 100.000,
},
{
    photourl: 'https://s1.gaming-cdn.com/images/products/5295/orig/game-steam-farm-together-cover.jpg',
    name: "Farm together",
    price: 150.000,
}
];

let container = document.getElementsByClassName("sanpham");
for (let i=0;i<group.length;i++)
{
    let itemBox = document.createElement("div");
    itemBox.className ='item';
}