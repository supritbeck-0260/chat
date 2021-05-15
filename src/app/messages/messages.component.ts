import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { SocketService } from '../socket.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  user:{name:string,room:string};
  @Input() messages=[];
  constructor(private realtime:SocketService,private store:LocalstorageService) {
    this.user = this.store.get('user');
    this.realtime.socket.on(this.user.room,data=>{
      this.messages.push({...data,time:new Date().toLocaleTimeString()});
    })
  }
  ngOnInit() {
    this.realtime.socket.emit('newjoinee',this.user);
  }

}
