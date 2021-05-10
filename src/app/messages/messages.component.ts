import { Component, Input, OnInit } from '@angular/core';
import {User} from '../interfaces/user-interface';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() messages=[];
  constructor() { }
  ngOnInit() {
  }

}
