import { NgModule } from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent, 
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
