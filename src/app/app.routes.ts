import {Routes} from '@angular/router'
import { CreateTask } from "./createTask/createTask.component";
import {ReadTask} from "./readTask/readTask.component";
import {UpdateTask} from "./update-task/update.component";

export const routes: Routes = [{
  path : 'createTask',
  component: CreateTask
},{
  path: 'readTask',
  component: ReadTask
},{
  path: 'updateTask/:id',
  component: UpdateTask
}];
