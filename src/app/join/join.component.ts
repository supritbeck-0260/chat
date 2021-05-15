import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { LocalstorageService } from '../localstorage.service';
import { SocketService } from '../socket.service';
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

  constructor(private router : Router , private realtime:SocketService, private store:LocalstorageService) { }
  user:User={
    room:'',
    name:''
  };
  joinHandler(){
    if(!this.user.room || !this.user.name) return;
    this.router.navigate(['chat']);
    this.store.set('user',this.user);
  }
  ngOnInit() {
  }

}
