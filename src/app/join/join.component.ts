import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
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

  constructor(private router : Router , private realtime:SocketService) { }
  user:User={
    room:'',
    name:''
  };
  joinHandler(){
    if(!this.user.room || !this.user.name) return;
    this.router.navigate(['chat']);
    this.realtime.socket.emit('newjoinee',this.user);
  }
  ngOnInit() {
  }

}
