import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { LocalstorageService } from '../localstorage.service';
interface User{
  userName:String,
  email:String,
  date?:String
}
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  users:User;
  token:string;
  id:string;
  constructor(private http:HttpService , private router:Router , private store:LocalstorageService) {
    this.token = this.store.get('user').token;
    this.id = this.store.get('user').id;
   }
  clickHandler(user){
    this.http.gotoRoom({...user,token:this.token}).subscribe((data:any)=>{
      if(data.status == 200) this.router.navigate(['chat',{room:data.room,name:data.name}]);
    });
    
  }
  ngOnInit() {
    this.http.getusers().subscribe((data:User)=>{
      if(data) this.users = data;
    });
  }

}
