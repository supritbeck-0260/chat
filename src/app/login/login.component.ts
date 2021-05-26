import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;
  type:string;
  validateForm!: FormGroup;
  submitForm(): void {
    this.message='';
    this.type='';
    const {email,password} = this.validateForm.controls;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.http.login({email:email.value,password:password.value})
    .subscribe((data:any)=>{
      this.message = data.message;
      if(data.status == 200) return this.router.navigate(['/chat']);;
      this.type='error'
      if(data.emailFlag) this.validateForm.controls['email'].setErrors({'incorrect': true});
      if(data.passwordFlag) this.validateForm.controls['password'].setErrors({'incorrect': true});

    });

  }

  constructor(private fb: FormBuilder ,private http:HttpService, private router:Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
