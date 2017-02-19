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

  constructor(private service: AppSingleton,private router: Router){}
  ngOnInit(){
    this.tasks = this.service.tasks;
  }
  deleteTask(i:number){
    this.tasks.splice(i,1);
  }
  redirect(index :number) {
    this.router.navigate(['updateTask',index]);
  }

}
