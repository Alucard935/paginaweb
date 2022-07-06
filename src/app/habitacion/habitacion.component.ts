import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit {


  valor = "";
  json = [
    { doble: 37, humedad: 10, sensor: "Site 1" },
    { doble: 27, humedad: 15, sensor: "Site 2" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
