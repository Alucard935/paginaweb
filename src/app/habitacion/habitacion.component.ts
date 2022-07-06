import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
  
export class HabitacionComponent implements OnInit {

  getRandonSensor() {
    let min = 10;
    let max = 15;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min)
  };
  valor = "";
  json = [
    { doble: 37, humedad: this.getRandonSensor(), sensor: "Site 1" },
    { doble: 27, humedad: this.getRandonSensor(), sensor: "Site 2" }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
}
