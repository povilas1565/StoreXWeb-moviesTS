import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginCtrl!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loginCtrl = this.fb.group({
      email: this.fb.control(null, [Validators.email, Validators.required]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(5)])
    })
  }

  login() {
    this.authService.login(this.loginCtrl.value).subscribe((output) => {
      
      if(output.status === 'failed') {
        const keys = Object.keys(output.message)
        
        for(let i = 0; i<keys.length; i++) {
          this.loginCtrl.get(keys[i])?.setErrors(output.message[keys[i]][0])          
        }

       } else {
        
         this.tokenService.set(output.authorisation.token)
         this.router.navigate(['/'])
       }
      }, (error) => {
        console.log(error);
      })
  }


  get emailCtrl() {
    return this.loginCtrl.get('email') as FormControl
  }
  get passwordCtrl() {
    return this.loginCtrl.get('password') as FormControl
  }
}
