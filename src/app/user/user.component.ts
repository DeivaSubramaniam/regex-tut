import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { data } from '../data.mock';
import User from '../data.model';
import * as CustomeValidators from './custome.validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userForm: FormGroup;
message = false;
uniquename = false;
nameFormControlValue;
allNames: string[] = [];
public userdata: User;
isNameUnique = false;
newDataOfUsers;
get name() { return this.userForm.get('name'); }
constructor(private dservice: DataService) {}
 ngOnInit() {
      this.userForm = new FormGroup({
      name: new FormControl('',
                    [
                      Validators.required,
                      Validators.pattern(/^[A-Z]{1}.*/),
                      CustomeValidators.mustNeedTwoAlphapets,
                      CustomeValidators.SpcialCharacterValidation,
                      CustomeValidators.nameAlreadyPresent
                    ]),
    });
  }

    save(name) {
          const newName = this.name.value;
          console.log('name', newName);
          console.log(name);
          this.allNames = JSON.parse(localStorage.getItem('mydata'));
          this.allNames.push(newName);
          localStorage.setItem('mydata', (JSON.stringify(this.allNames)));
          console.log(this.allNames);
          if (this.userForm.valid) {
            console.log('FormSubmitted!');
            this.userForm.reset();
            this.messageDisplay();
          }
    }
    messageDisplay() {
        this.message = true;
         setTimeout(() => {
          console.log(this.message);
          this.message = false;
        }, 5000);

      }
}
