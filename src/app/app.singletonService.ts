import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class AppSingleton {
  tasks:Task[] = [];
}

