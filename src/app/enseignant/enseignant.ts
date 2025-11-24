
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enseignant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enseignant.html',
  styleUrls: ['./enseignant.css']
})
export class Enseignant {
  imgUrl = "data:image/png;base64,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";
  enseignents = [
    { 
      icon : this.imgUrl,
     nom: "malek",
     prenom:"azizi",
     speciality:"dev sys info " ,
     depart : "tech info",
     status :"i cant see it",
    email:"exemple.thing@yahoo.com",
    isconnected : true,
    },
    { 
      icon : this.imgUrl,
     nom: "mariem",
     prenom:"bargoubi",
     speciality:"dev web" ,
     depart : "tech info",
     status :"i cant see it",
    email:"wow.enail@exmple.com",
    isconnected : false,
    },
    { 
      icon : this.imgUrl,
      nom: "azyz",
      prenom:"bouraoui",
      speciality:"dev sys info" ,
      depart : "tech info",
      status :"i cant see it",
      email:"contact.azyz@gmail.com",
      isconnected : true,
    },
    { 
      icon : this.imgUrl,
      nom: "amine",
      prenom:"ayachi",
      speciality:"dev web" ,
      depart : "mecanique",
      status :"i cant see it",
      email:"contact.azyz@gmail.com",
      isconnected : true,
    },
    { 
      icon : this.imgUrl,
      nom: "sirine",
      prenom:"derbali",
      speciality:"reseau" ,
      depart : "tech info",
      status :"i cant see it",
      email:"contact.azyz@gmail.com",
      isconnected : false,
    },
    { 
      icon : this.imgUrl,
      nom: "firass",
      prenom:"ben yaacoub",
      speciality:"dev web" ,
      depart : "tech info",
      status :"i cant see it",
      email:"contact.azyz@gmail.com",
      isconnected : true,
    },
    { 
      icon : this.imgUrl,
      nom: "miri",
      prenom:"oumaima",
      speciality:"dev web" ,
      depart : "tech info",
      status :"i cant see it",
      email:"contact.azyz@gmail.com",
      isconnected : true,
    },
    { 
      icon : this.imgUrl,
      nom: "sajed",
      prenom:"jemli",
      speciality:"reseau" ,
      depart : "tech info",
      status :"i cant see it",
      email:"contact.azyz@gmail.com",
      isconnected : false,
    },
  ]
}