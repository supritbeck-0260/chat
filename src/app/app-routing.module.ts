import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';


const routes: Routes = [   
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'chat',
    component: ChatRoomComponent
  },
  {
    path:'join',
    component: JoinComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
