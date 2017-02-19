import { Component, OnInit } from '@angular/core';
import { AppSingleton } from "../app.singletonService";
import {Task} from "../task";
import {FormGroup} from "@angular/forms";

@Component ({
  selector: 'create',
  templateUrl: './app/createTask/createTask.component.html',
  styleUrls: ['']
})

export class CreateTask implements OnInit{

  tasks:Task[];
  addForm: FormGroup;
  constructor(private service: AppSingleton){}
  ngOnInit(){
    this.tasks = this.service.tasks;
  }
  addData() {
    if (this.addForm.valid) {
      var adduser = {
        id: this.addForm.controls['id'].value,
        title: this.addForm.controls['title'].value,
        description: this.addForm.controls['description'].value,
        priority: this.addForm.controls['priority'].value
      };
      this.tasks.push(new Task(adduser.id,adduser.title,adduser.description,adduser.priority))
      console.log(adduser);// adduser var contains all our form values. store it where you want
      this.addForm.reset();// this will reset our form values to null
    }
  }

}
