import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
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
import { ScrollDirective } from './scroll.directive';
import { FormComponent } from './form/form.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import {ZoroModule} from './zorro/zorro.module';
import { LoginComponent } from './login/login.component';
import { AllusersComponent } from './allusers/allusers.component';
import { SearchPipe } from './search.pipe';

registerLocaleData(en);


const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent,
    MessagesComponent,
    InputComponent,
    NavbarComponent,
    HomeComponent,
    JoinComponent,
    ScrollDirective,
    FormComponent,
    LoginComponent,
    AllusersComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ZoroModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SocketService, { provide: NZ_I18N, useValue: en_US },{ provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
