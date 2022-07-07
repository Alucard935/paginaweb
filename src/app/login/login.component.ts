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
    { email: "Fernando", password: "Coss" },
    { email: "Arturo", password: "Gonzales" }
  ]
  login() {
    for (let i = 0; i < this.json.length; i++)
    if (this.email == this.json[i].email && this.password == this.json[i].password) {
      window.location.href = "/habi";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
