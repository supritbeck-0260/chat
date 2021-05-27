import { Component, OnInit } from '@angular/core';
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
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getusers().subscribe((data:User)=>{
      if(data) this.users = data;
    });
  }

}
