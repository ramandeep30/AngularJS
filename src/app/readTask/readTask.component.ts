import {Component, OnInit} from '@angular/core';
import {AppSingleton} from "../app.singletonService";
import {Task} from "../task";

@Component ({
  selector: 'read',
  templateUrl: './app/readTask/readTask.component.html',
  styleUrls: ['']
})

export class ReadTask implements OnInit{

  tasks:Task[];
  constructor(private service: AppSingleton){}
  ngOnInit(){
    this.tasks = this.service.tasks;
  }

}
