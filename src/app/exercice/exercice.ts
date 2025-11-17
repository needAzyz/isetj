import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercice.html',
  styleUrl: './exercice.css'
})
export class Exercice {
  etudiant = [
    { id:1,nom: "azyz",prenom:"bouraoui",email:"contact.azyz@gmail.com" },
    { id:2,nom: "mariem",prenom:"la9ab",email:"contact.azyz@gmail.com" },
    { id:3,nom: "ayoub",prenom:"7aja",email:"contact.azyz@gmail.com" },
    { id:4,nom: "maram",prenom:"la9ab a5er",email:"contact.azyz@gmail.com" },
    { id:5,nom: "tofla",prenom:"hehe",email:"contact.azyz@gmail.com" },
  ]
}
