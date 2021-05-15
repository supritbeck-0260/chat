import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store:LocalstorageService , private router:Router) { }
  exit(){
    this.store.remove('user');
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
