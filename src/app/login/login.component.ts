import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email="";
  password= "";

  json = [
    { email: "Enrique", password: "123456" },
    { nombre: "Fernando", password: "Coss" },
    { nombre: "Arturo", password: "Gonzales" }
  ]
  login() {
    for (let i = 0; i < this.json.length; i++)
    if (this.email == this.json[0].email && this.password == this.json[0].password) {
      window.location.href = "/habi";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
