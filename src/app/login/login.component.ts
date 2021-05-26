import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    const {email,userName,password} = this.validateForm.controls;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.http.signup({email:email.value,userName:userName.value,password:password.value})
    .subscribe((data:any)=>{
      this.message = data.message;
      if(data.status == 200) return this.type='success';
      this.type='error'
      if(data.emailFlag) this.validateForm.controls['email'].setErrors({'incorrect': true});
      if(data.passwordFlag) this.validateForm.controls['password'].setErrors({'incorrect': true});

    });

  }

  constructor(private fb: FormBuilder ,private http:HttpService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
