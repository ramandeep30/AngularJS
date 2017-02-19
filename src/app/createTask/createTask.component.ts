import { Component, OnInit } from '@angular/core';
import { AppSingleton } from "../app.singletonService";
import {Task} from "../task";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";

@Component ({
  selector: 'create',
  templateUrl: './app/createTask/createTask.component.html',
  styleUrls: ['']
})

export class CreateTask implements OnInit{

  tasks:Task[];
  addForm: FormGroup;
  constructor(private service: AppSingleton, private formBuilder: FormBuilder){}
  ngOnInit(){
    this.tasks = this.service.tasks;
    this.addForm = this.formBuilder.group({
      date: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required]
    })
  }
  addData() {
    if (this.addForm.valid) {
      var addTask = {
        date: this.addForm.controls['date'].value,
        title: this.addForm.controls['title'].value,
        description: this.addForm.controls['description'].value,
        priority: this.addForm.controls['priority'].value
      };
      this.tasks.push(new Task(addTask.date,addTask.title,addTask.description,addTask.priority))
      console.log(addTask);// addTask var contains all our form values. store it where you want
      this.addForm.reset();// this will reset our form values to null
    }
  }

}
