import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("",
      [Validators.required,
      Validators.minLength(5)]),
      password: new FormControl("",
      [Validators.required,
      Validators.minLength(5)])
    });
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }

  constructor(private formBuilder: FormBuilder) { 
    this.createLoginForm();
  }

  login() {
    console.log('User logged');
    console.log(this.loginForm.value);
    const user = this.loginForm.value.username;
    alert(`Login Realizado com Sucesso: ${user}`);
    this.loginForm.reset();
  }
}