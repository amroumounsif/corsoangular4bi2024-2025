import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
=======
>>>>>>> 79f92169428bac774ff2772401cdfbfc030c0013

@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< HEAD
  imports: [ReactiveFormsModule],
=======
  imports: [],
>>>>>>> 79f92169428bac774ff2772401cdfbfc030c0013
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
<<<<<<< HEAD
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
=======

>>>>>>> 79f92169428bac774ff2772401cdfbfc030c0013
}
