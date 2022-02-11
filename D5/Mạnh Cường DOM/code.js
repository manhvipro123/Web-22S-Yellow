let sanpham=[
    {name:"00 quanT",gia:490.000,Img:'./asset/00-qan-t-hg-800x800_master.jpg'},
    {name:"00 Raier",gia:300.000,Img:'./asset/00_raiser_designer_color_ver_hg00_hg_1d41bec1479345a59d2fe8bd88888426_master.jpg'},
    {name:"Barbatos Lupus Rex",gia:490.000,Img:'./asset/gundam_barbatos_lupus_rex_hgibo_mo_hinh_gunpla_chinh_hang_bandai_d1bbe1da55cb4aa384deb6ad4c6f4c94_master.jpg'},
    {name:"Barbatos 6th form",gia:490.000,Img:'./asset/gundam_barbatos_6th_form_hg_f1a31dc38196454ea81d532fef783a26_master.jpg'},
]
let temp=document.getElementsByClassName("Sanpham");

for(let i=0; i<sanpham.length;i++){
    let itemBox=document.createElement('div');
    itemBox.className=`item`;
    let name =document.createElement('h2');
    name.innerHTML=sanpham[i].name
    itemBox.appendChild(name)
   let gia =document.createElement('h3');
    gia.innerHTML=sanpham[i].gia
    itemBox.appendChild(gia)
   let Img =document.createElement('img');
    Img.src=sanpham[i].Img;
    Img.className = "itemImage"
    itemBox.appendChild(Img)
    temp[0].appendChild(itemBox)
    itemBox.appendChild(document.createElement('br'));
    let button=document.createElement('button');
    button.innerHTML="Mua"
    itemBox.appendChild(button)

}
console.log(sanpham)
