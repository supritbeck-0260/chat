import { Component,Input, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { SocketService } from '../socket.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() user:{name:string,room:string};
  @Input() messages=[];
  constructor(private realtime:SocketService,private store:LocalstorageService) {}

  ngOnInit() {
    console.log(this.user);
    if(!this.user) return;
    this.realtime.socket.emit('newjoinee',this.user);
    this.realtime.socket.on(this.user.room,data=>{
      this.messages.push({...data,time:new Date()});
    })
  }

}
