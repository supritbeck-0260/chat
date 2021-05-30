import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import {HttpService} from './http.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private store: LocalstorageService, private http:HttpService ,private router:Router) { }
  isAuthenticated(){
    const token = this.store.get('user').token;
    this.http.isLoggedIn(token).subscribe((response:any)=>{
      if(response.status == 200) return;
      this.store.remove('user');
      this.router.navigate(['login']);
    })
    
    return !!token;
  }
}
