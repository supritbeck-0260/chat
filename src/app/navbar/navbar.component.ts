import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor( private router:Router , private auth:AuthService) {}
  exit(){
    this.auth.logout();
    this.router.navigate(['']);
  }
  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedin();
  }

}
