import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list'; 
import { DragDropModule } from '@angular/cdk/drag-drop'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatListModule, DragDropModule ],
  declarations: [ AppComponent, HelloComponent ],


  bootstrap:    [ AppComponent ]
})
export class AppModule { }
