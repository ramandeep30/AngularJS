import {Component, OnInit} from '@angular/core';
import {AppSingleton} from "../app.singletonService";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Task} from "../task";
import {ActivatedRoute} from "@angular/router";

@Component ({
  selector: 'updateTask',
  templateUrl: './app/createTask/createTask.component.html',
  styleUrls: ['']
})

export class UpdateTask implements OnInit{

  tasks:Task[];
  index: number;
  task: Task;
  addForm: FormGroup;
  constructor(private service: AppSingleton, private formBuilder: FormBuilder, private route: ActivatedRoute,){}
  ngOnInit(){
    this.tasks = this.service.tasks;
    this.addForm = this.formBuilder.group({
      date: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required]
    })

    this.route.params.subscribe((data: any) => {
      this.index = +data.id;
      this.task = this.tasks[this.index];
    });
    this.addForm.get('date').setValue(this.task.date);
    this.addForm.get('title').setValue(this.task.title);
    this.addForm.get('description').setValue(this.task.description);
    this.addForm.get('priority').setValue(this.task.priority);
  }
  addData() {
    if (this.addForm.valid) {
      let addTask = {
        date: this.addForm.controls['date'].value,
        title: this.addForm.controls['title'].value,
        description: this.addForm.controls['description'].value,
        priority: this.addForm.controls['priority'].value
      };
      this.tasks[this.index].description = addTask.description;
      this.tasks[this.index].title = addTask.title;
      this.tasks[this.index].date = addTask.date;
      this.tasks[this.index].priority = addTask.priority;

      console.log(addTask);// addTask var contains all our form values. store it where you want
      this.addForm.reset();// this will reset our form values to null
    }
  }

}

