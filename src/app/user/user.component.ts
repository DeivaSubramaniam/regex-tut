import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators,ValidationErrors } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';

import { User } from '../data.model';
//import {data} from '../data.mock';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userForm;
name = new FormControl();
//private userdata: any = {};
public userdata: User;
 constructor(private dservice: DataService, private fb: FormBuilder){}
 ngOnInit() {
      this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]([A-Z]?[a-z0-9_$&-]{2,20})+')]
    });
    
  }
    save(userdata: User) {
        //console.log(userdata);
          this.dservice.setUser(userdata);
          if(this.userForm.valid){
            console.log('FormSubmitted!');
            this.userForm.reset();
          }
          console.log(userdata);
    }
    // save(user) {
    // this.dservice.addUser(user);
    //     if (this.userForm.valid) {
    //   console.log('Form Submitted!');
    //   this.userForm.reset();
    //     }
    //     console.log(data);
    // }
 
}