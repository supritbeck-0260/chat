import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { AllusersComponent } from './allusers/allusers.component';

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
  {
    path:'signup',
    component:FormComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'users',
    component:AllusersComponent
  },
  {
    path:'**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
