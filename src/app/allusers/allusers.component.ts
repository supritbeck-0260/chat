import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getusers().subscribe(data=>console.log(data));
  }

}
