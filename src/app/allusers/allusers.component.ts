import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
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
  constructor(private http:HttpService , private router:Router) { }
  clickHandler(user){
    console.log(user);
    this.http.gotoRoom(user).subscribe(data=>{
      console.log(data);
      // this.router.navigate(['chat']);
    });
    
  }
  ngOnInit() {
    this.http.getusers().subscribe((data:User)=>{
      if(data) this.users = data;
    });
  }

}
