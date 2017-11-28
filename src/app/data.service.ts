import { Injectable } from '@angular/core';
import User from './data.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { data } from './data.mock';
import { UserComponent } from './user/user.component';

@Injectable()
export class DataService {
private userdata = data;
newName: string;
  constructor() {
  }
listOfallDatas: string[] = [];

  setUser(name) {
      localStorage.setItem('mydata', JSON.stringify(this.userdata));
  }

}
