import { Injectable } from '@angular/core';
import { User } from './data.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class DataService {
private userdata: User;
  constructor() { }
  // getUserData(){
  //   return data;
  //}
  // addUser(user) {
  //    data.push(user);
  // }
  // addNewUser(user) {
  //    data.push(user);
  // }
  setUser(user: User) {
    localStorage.setItem('mydata', JSON.stringify(user));
    this.userdata = user;
    console.log(user);
  }
  getUser() {
    const userdata = localStorage.getItem('mydata');
    this.userdata = JSON.parse(userdata);
    return this.userdata;
  }
}
