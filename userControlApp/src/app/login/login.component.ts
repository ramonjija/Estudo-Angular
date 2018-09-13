import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    if(sessionStorage.getItem("loggedIn") == "true") { 
      this.router.navigate(['']);
    }

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

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.createLoginForm();
  }

  login() {
    console.log('User logged');
    console.log(this.loginForm.value);
    const user = this.loginForm.value.username;
    alert(`Login Realizado com Sucesso: ${user}`);
    this.loginForm.reset();
    sessionStorage.setItem("loggedIn", "true");
  }
}