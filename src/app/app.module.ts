import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CreateTask} from "./createTask/createTask.component";
import {UpdateTask} from "./update-task/update.component";
import {ReadTask} from "./readTask/readTask.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AppSingleton} from "./app.singletonService";

@NgModule({
  imports:      [ BrowserModule ,FormsModule, CommonModule, RouterModule.forRoot(routes), ReactiveFormsModule,],
  declarations: [ AppComponent, CreateTask, UpdateTask, ReadTask ],
  bootstrap:    [ AppComponent ],
  providers:    [AppSingleton]
})
export class AppModule { }
