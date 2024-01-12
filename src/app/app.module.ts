import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentDataComponent,
    MomentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
