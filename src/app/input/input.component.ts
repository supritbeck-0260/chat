import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() sendMessage= new EventEmitter<string>();
  constructor() { }
  message:string='';
  send(){
    if(this.message) this.sendMessage.emit(this.message);
    this.message = '';
  }
  ngOnInit() {
  }

}
