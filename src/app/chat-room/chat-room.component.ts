import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(private realtime:SocketService) { }
  chats=[];
  getMessage(event){
     this.chats.push({message:event,type:'me'});
     this.realtime.socket.emit('message',{message:event,room:'crazy'});
  }
  ngOnInit() {
  }

}
