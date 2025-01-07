import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hidePassword: boolean = true;

//Formulário de Login
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    localStorage.clear();
  }

  changeHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  login(): void {
    console.log(this.loginForm.value);
  }


}
