import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SocketService } from '../socket.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() messages=[];
  constructor(private realtime:SocketService) {
    this.realtime.socket.on('crazy',data=>{
      this.messages.push(data)
    })
  }

  ngOnInit() {
  }

}
