import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpService } from '../http.service';
import { LocalstorageService } from '../localstorage.service';
interface response{
  message:string,
  name?:string,
  token?:string,
  status:number
  emailFlag?:string,
  passwordFlag?:string,
  id?:string
}
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
    .subscribe((data:response)=>{
      this.message = data.message;
 
      if(data.status == 200) {
        this.auth.login({name:data.name,token:data.token,id:data.id});
        this.router.navigate(['users']);
        return 
      };
      this.type='error'
      if(data.emailFlag) this.validateForm.controls['email'].setErrors({'incorrect': true});
      if(data.passwordFlag) this.validateForm.controls['password'].setErrors({'incorrect': true});

    });

  }

  constructor(private fb: FormBuilder ,private http:HttpService, private router:Router , private store:LocalstorageService, private auth:AuthService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
