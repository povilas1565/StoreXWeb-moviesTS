import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupCtrl!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signupCtrl = this.fb.group({
      name: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(5)]),
    })
  }

  signup() {
    this.authService.register(this.signupCtrl.value).subscribe((output) => {
      
      if(output.status === 'failed') {
        const keys = Object.keys(output.message)
        
        for(let i = 0; i<keys.length; i++) {
          this.signupCtrl.get(keys[i])?.setErrors(output.message[keys[i]][0])          
        }

       } else {
        this.router.navigate(['/login'])
       }
      }, (error) => {
        console.log(error);
      })
  }


  get emailCtrl() {
    return this.signupCtrl.get('email') as FormControl
  }
  get nameCtrl() {
    return this.signupCtrl.get('name') as FormControl
  }
  get passwordCtrl() {
    return this.signupCtrl.get('password') as FormControl
  }
}
