import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { SocketService } from '../socket.service';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  user:{name:string;room:string};
  constructor(private realtime:SocketService, private store:LocalstorageService) { 
    this.user = this.store.get('user');
  }
  chats=[];
  getMessage(event){
     this.chats.push({message:event,type:'me',user:{name:'You'}});
     this.realtime.socket.emit('message',{message:event,user:this.user});
  }
  ngOnDestroy(){
    this.realtime.socket.emit('disconnected',{user:this.user});
  }
  ngOnInit() {
  }

}
