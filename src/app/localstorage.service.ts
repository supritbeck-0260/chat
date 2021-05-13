import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  get(item){
    return JSON.parse(localStorage.getItem(item));
  }
  set(item,value){
    localStorage.setItem(item,JSON.stringify(value))
  }
}
