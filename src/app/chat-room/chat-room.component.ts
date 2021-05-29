import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { SocketService } from '../socket.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  user:{name:string;room:string,id:string};
  roomId:string;
  name:string;
  
  constructor(private realtime:SocketService, private store:LocalstorageService , private parameters:ActivatedRoute , private http:HttpService) { 
    
  }
  chats=[];
  getMessage(event){
     this.chats.push({message:event,name:this.user.name,id:this.user.id,time:new Date()});
     this.realtime.socket.emit('message',{message:event,user:this.user});
  }
  ngOnDestroy(){
    this.realtime.socket.emit('disconnected',{user:this.user});
  }
  ngOnInit() {
    this.roomId = this.parameters.snapshot.paramMap.get('room');
    this.name = this.parameters.snapshot.paramMap.get('name');
    if(!this.name && !this.roomId) return
    this.user = {name:this.store.get('user').name,room:this.roomId,id:this.store.get('user').id};
    this.http.getMessages({room:this.roomId}).subscribe((data:any)=>{
      if(data.status == 200) this.chats=data.messages
    });
  }

}
