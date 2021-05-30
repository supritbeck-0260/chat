import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import {HttpService} from './http.service'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false)
  token:string = this.store.get('user') && this.store.get('user').token;
  constructor( private store: LocalstorageService, private http:HttpService ,private router:Router) {
    if(!this.token) return
    this.http.isLoggedIn(this.token).subscribe((response:any)=>{
      if(response.status == 200) return this.loggedIn.next(response.loggedin);
      this.store.remove('user');
      this.router.navigate(['login']);
    })
   }
   public login(data){
    this.loggedIn.next(true);
    this.store.set('user',data);
   }
   public logout(){
    this.loggedIn.next(false);
    this.store.remove('user');
   }
   public isLoggedin(){
     return this.loggedIn;
   }
}
