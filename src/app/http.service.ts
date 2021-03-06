import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  signup(data){
    return this.http.post('api/signup',data);
  }
  login(data){
    return this.http.post('api/login',data);
  }
  getusers(){
    return this.http.get('api/allusers');
  }
  gotoRoom(data){
    const {name,_id,userName} = data;
    return this.http.post('api/room',{name,_id,userName},{
      headers:{
        authentication:data.token
      }
    });
  }
  getMessages(data){
    return this.http.post('api/messages',data);
  }
  isLoggedIn(data){
    return this.http.get('api/isloggedin',{
      headers:{
        authentication:data
      }
    });
  }
  recentChats(id){
    return this.http.post('api/recentchats',id);
  }
}
