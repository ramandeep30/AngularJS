import {Component, OnInit} from '@angular/core';
import {AppSingleton} from "../app.singletonService";
import {Task} from "../task";
import { Router } from '@angular/router';

@Component ({
  selector: 'read',
  templateUrl: './app/readTask/readTask.component.html',
  styleUrls: ['']
})

export class ReadTask implements OnInit{

  tasks:Task[];
  router:Router;
  constructor(private service: AppSingleton){}
  ngOnInit(){
    this.tasks = this.service.tasks;
  }
  deleteTask(i:number){
    this.tasks.splice(i,1);
  }
  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }

}
