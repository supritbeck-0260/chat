import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // @ViewChild('list',{static: false}) private list: ElementRef;
  @Input() messages=[];
  constructor() { 
    // this.socket.emit('getDoc', 'hello');
  }
  // ngOnChanges(changes){
  //   console.log('onchanges',changes)
  // }
  // scrollToBottom():void {
  //   this.list.nativeElement.scrollTop = this.list.nativeElement.scrollHeight;
  //  }
  ngOnInit() {
  }

}
