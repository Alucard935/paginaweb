import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busc',
  templateUrl: './busc.component.html',
  styleUrls: ['./busc.component.css']
})
export class BuscComponent implements OnInit {

  json = [
    { nombre: "Enrique", apellido: "Gonzales", Foto: "assets/img/enrique.jpg" },
    { nombre: "Fernando", apellido: "Coss", Foto: "assets/img/fer.jpg" },
    { nombre: "Arturo", apellido: "Gonzales", Foto: "assets/img/Artu.jpg" }
  ]
  dato = "";
  constructor() { }

  ngOnInit(): void {
  }

}
