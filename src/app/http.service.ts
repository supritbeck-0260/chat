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
}