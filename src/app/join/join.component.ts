import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
interface User{
  room:string;
  name:string;
}
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})

export class JoinComponent implements OnInit {

  constructor(private router : Router) { }
  user:User={
    room:'',
    name:''
  };
  joinHandler(){
    if(this.user.room && this.user.name) this.router.navigate(['chat']);
  }
  ngOnInit() {
  }

}
