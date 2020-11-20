import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  email:string = "";
  password:string = "";

  logIn(){
    if(this.email == "user@issuer.com" && this.password =="password"){
      this.router.navigateByUrl('/transactions')
    }
    else{
      console.log("User unauthorized");
    }
  }

}
