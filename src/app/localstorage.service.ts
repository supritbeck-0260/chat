import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  get(item){
    localStorage.getItem(item);
  }
  set(item,value){
    localStorage.setItem(item,value)
  }
}
