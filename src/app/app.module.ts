import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CreateTask} from "./createTask/createTask.component";
import {DeleteAndUpdateTask} from "./deleteAndUpdate/deleteAndUpdate.component";
import {ReadTask} from "./readTask/readTask.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot(routes)],
  declarations: [ AppComponent, CreateTask, DeleteAndUpdateTask, ReadTask ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
