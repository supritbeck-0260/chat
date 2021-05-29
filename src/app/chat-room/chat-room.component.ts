import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { SocketService } from '../socket.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  user:{name:string;room:string};
  roomId:string;
  name:string;
  
  constructor(private realtime:SocketService, private store:LocalstorageService , private parameters:ActivatedRoute) { 
    
  }
  chats=[];
  getMessage(event){
     this.chats.push({message:event,type:'me',user:{name:'You'},time:new Date()});
     this.realtime.socket.emit('message',{message:event,user:this.user});
  }
  ngOnDestroy(){
    this.realtime.socket.emit('disconnected',{user:this.user});
  }
  ngOnInit() {
    this.roomId = this.parameters.snapshot.paramMap.get('room');
    this.name = this.parameters.snapshot.paramMap.get('name');
    this.user = {name:this.store.get('user').name,room:this.roomId};
  }

}
