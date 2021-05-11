import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(private socket: Socket) { }
  chats=[];
  getMessage(event){
     this.chats.push({message:event});
  }
  ngOnInit() {
  }

}
