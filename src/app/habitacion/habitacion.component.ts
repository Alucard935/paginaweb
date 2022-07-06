import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
  
export class HabitacionComponent implements OnInit {

  getRandomSensor() {
    let min = 10;
    let max = 15;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min)
  };
  getRandomTemp() {
    let min = 22;
    let max = 35;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min)
  };
  valor = "";
  json = [
    { doble: this.getRandomTemp(), humedad: this.getRandomSensor(), sensor: "Site 1" },
    { doble: this.getRandomTemp(), humedad: this.getRandomSensor(), sensor: "Site 2" }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
}
