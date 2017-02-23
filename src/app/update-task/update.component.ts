import {Component, OnInit} from '@angular/core';
import {AppSingleton} from "../app.singletonService";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Task} from "../task";
import {ActivatedRoute} from "@angular/router";

@Component ({
  moduleId: module.id,
  selector: 'updateTask',
  templateUrl: '../createTask/createTask.component.html',
  styleUrls: ['']
})

export class UpdateTaskComponent implements OnInit{

  tasks:any[];
  index: string;
  task: any;
  addForm: FormGroup;
  constructor(private service: AppSingleton, private formBuilder: FormBuilder, private route: ActivatedRoute,){}
  ngOnInit(){
    // this.tasks = this.service.tasks;
    this.service.showTask().subscribe(data => {
      this.tasks = data;
      // alert("sara data aa gya"+JSON.stringify(data));

      this.route.params.subscribe((data: any) => {
        this.index = data.id;
        // alert('---------id------------'+JSON.stringify(this.index))
        this.task = this.tasks.filter(x=>x._id==this.index)[0];
        alert("filling this data"+this.task);
      });
      this.addForm.get('date').setValue(this.task.date);
      this.addForm.get('title').setValue(this.task.title);
      this.addForm.get('description').setValue(this.task.description);
      this.addForm.get('priority').setValue(this.task.priority);
    }, error => {
      alert(error)
    });
    this.addForm = this.formBuilder.group({
      date: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required]
    });

  }
  addData() {
    if (this.addForm.valid) {
      let addTask = {
        date: this.addForm.controls['date'].value,
        title: this.addForm.controls['title'].value,
        description: this.addForm.controls['description'].value,
        priority: this.addForm.controls['priority'].value
      };

      console.log("task to be added" + JSON.stringify(addTask))
      this.service.updateTask(new Task(addTask.date,addTask.title,addTask.description,addTask.priority),this.index)
        .subscribe(data => {
          this.tasks =data;
          alert("yaha aa gya me"+JSON.stringify(data));
        }, error => {
          alert(error)
        });
      console.log(addTask);// addTask var contains all our form values. store it where you want
      this.addForm.reset();// this will reset our form values to null
    }
  }

}
