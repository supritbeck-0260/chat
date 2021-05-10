import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user-interface'
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor() { }
  chats=[];
  getMessage(event){
     this.chats.push({message:event});
  }
  ngOnInit() {
  }

}
