import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {User} from '../interfaces/user-interface';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // @ViewChild('list',{static: false}) private list: ElementRef;
  @Input() messages=[];
  constructor() { }
  // ngOnChanges(changes){
  //   console.log('onchanges',changes)
  // }
  // scrollToBottom():void {
  //   this.list.nativeElement.scrollTop = this.list.nativeElement.scrollHeight;
  //  }
  ngOnInit() {
  }

}
