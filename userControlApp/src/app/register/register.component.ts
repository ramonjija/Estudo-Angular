import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [ 
        Validators.required,
        Validators.minLength(5)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)])
    });
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
     username: '',
     email: '',
     password: ''
    })
  }

  get username() {
    return this.registerForm.get("username");
  }
  get email() {
    return this.registerForm.get("email");
  }
  get password() {
    return this.registerForm.get("password");
  }

  

  constructor(private formBuilder: FormBuilder) {
    this.createRegisterForm();
   }

  registerUser() {
    console.log('User Registered');
    alert("Registro Realizado com Sucesso");
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}
