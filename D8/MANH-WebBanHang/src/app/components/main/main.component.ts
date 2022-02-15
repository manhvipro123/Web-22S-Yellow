import { Component, OnInit } from '@angular/core';
import { Item } from '../../../models/item.models'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  

  public listItem : Array<Item> = [
    {name: "Ore no Yubi de Midarero",imageURL:'../../../assets/Ore-no-Yubi-de-Midarero-Heitengo-Futarikiri-no-Salon-de.jpg',price:1000, description:"Picante Circus, Suiseisha"},
    {name: "Amai Choubatsu Watashi wa Kanshu Senyou Pet",imageURL:'../../../assets/Amai-Choubatsu.jpg',price:1000, description:"Magic Bus, Picante Circus, Suiseisha"},
    {name: "Omiai Aite wa Oshiego Tsuyoki na Mondaiji",imageURL:'../../../assets/Omiai-Aite.jpg',price:1000, description:"Seven"},
    {name: "Yubisaki kara Honki no Netsujou",imageURL:'../../../assets/Yubisaki.jpg',price:1000, description:"Suiseisha"},
    {name: "Kaifuku Jutsushi no Yarinaoshi",imageURL:'../../../assets/Kaifuku-Jutsushi.jpg',price:1000, description:"Glovision, Lantis"},
    {name: "Eternity Shinya no Nurekoi Channel",imageURL:'../../../assets/Eternity-Shinya.jpg',price:1000, description:"Kanade Creative"},
    {name: "Yakin Byoutou",imageURL:'../../../assets/Yakin-Byoutou.jpg',price:1000, description:"AT-2, Discovery"},
    {name: "Hajimete no Hitozuma",imageURL:'../../../assets/Hajimete.jpg',price:1000, description:"Mary Jane"},
    {name: "Souryo to Majiwaru Shikiyoku no Yoru ni",imageURL:'../../../assets/Souryo.jpg',price:1000, description:"Seven, Suiseisha"},
    {name: "Mankitsu Happening",imageURL:'../../../assets/Mankitsu-Happening.jpg',price:1000, description:"Collabration Works"},
    {name: "Onii-chan Asa made Zutto Gyutte Shite!",imageURL:'../../../assets/Onii-chan.jpg',price:1000, description:"Mary Jane, Studio 1st"},
    {name: "Severance",imageURL:'../../../assets/severance.jpg',price:1000, description:"FOW"},
    {name: "Aniyome Wa Ijippari",imageURL:'../../../assets/Aniyome-Wa-Ijippari.jpg',price:1000, description:"Discovery"},
    {name: "Isekai Harem Monogatari",imageURL:'../../../assets/Isekai-Harem.jpg',price:1000, description:"Majin"},
    {name: "Baku Ane 2 Otouto Ippai Shibocchau zo! The Animation",imageURL:'../../../assets/Baku-Ane-2.jpg',price:1000, description:"Pink PineApple, Seven"},
    {name: "Yosuga No Sora",imageURL:'../../../assets/yosuga-no-sora.jpg',price:1000, description:"N/A"},
    {name: "25-sai no Joshikousei",imageURL:'../../../assets/25-sai.jpg',price:1000, description:"Cosmic Ray, Picante Circus, Suiseisha"},
    {name: "Reunion",imageURL:'../../../assets/reunion.jpg',price:1000, description:"poRo"},
    {name: "Netoshizu",imageURL:'../../../assets/Netoshizu.jpg',price:1000, description:"Antechinus"},
    {name: "Akane wa Tsumare Somerareru",imageURL:'../../../assets/Akane-wa.jpg',price:1000, description:"Antechinus"},
  ] 
  constructor() { }
  ngOnInit(): void {
  }

}
