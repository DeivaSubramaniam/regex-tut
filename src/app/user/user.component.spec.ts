import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { AppComponent } from '../app.component';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { DataService } from '../data.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ DataService ],
    declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });
    let errors = {};
    const names = component.userForm.controls['name'];
    errors = names.errors || {};

  it('Want to create a FormControl ', () => {
    expect(names.valid).toBeTruthy();
  });
  it('needed FormControl Name ', () => {
   names.setValue('Ka');
    expect(errors['required']).toBeTruthy();
  });
  it('verify FormControl Name have atleast two alphabets', () => {
     names.setValue('A123&$-');
    expect(errors['atleastTwoAlphabets']).toBeTruthy();
  });
  it('should make sure that name controls values got its first letter Cap', () => {
    names.setValue('ds233&');
    expect(errors['pattern']).toBeTruthy();
  });
    it('should type diffrent name', () => {
    names.setValue('Ka');
    expect(errors['nameAlreadyPresent']).toBeTruthy();
  });

});
