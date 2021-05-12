import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { MessagesComponent } from './messages/messages.component';
import { InputComponent } from './input/input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { SocketService } from './socket.service';


const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent,
    MessagesComponent,
    InputComponent,
    NavbarComponent,
    HomeComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
