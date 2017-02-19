import {Routes} from '@angular/router'
import { CreateTask } from "./createTask/createTask.component";
import {ReadTask} from "./readTask/readTask.component";

export const routes: Routes = [{
  path : 'createTask',
  component: CreateTask
},{
  path: 'readTask',
  component: ReadTask
}];
