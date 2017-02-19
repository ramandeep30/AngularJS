import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class AppSingleton {
  tasks:Task[] = [{
    date : null,
    description : 'love you',
    title : 'by anuj',
    priority : 'super high'}];
}

