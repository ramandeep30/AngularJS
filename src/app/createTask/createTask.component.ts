import { Component, OnInit } from '@angular/core';
import { AppSingleton } from "../app.singletonService";
import {Task} from "../task";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs/Observable"
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {Http, Headers} from "@angular/http";

@Component ({
  moduleId: module.id,
  selector: 'create',
  templateUrl: './createTask.component.html',
  styleUrls: ['']
})

export class CreateTaskComponent implements OnInit{

  tasks:Task[];
  task:Task;
  addForm: FormGroup;
  constructor(private service: AppSingleton, private formBuilder: FormBuilder,private http: Http){}
  ngOnInit(){
    this.tasks = this.service.tasks;
    this.addForm = this.formBuilder.group({
      date: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required]
    })
  }

  /*addData(){
    this.add().subscribe(data => {
      alert(JSON.stringify(data))
    }, error => {
      alert(error)
    })
  }*/

  addData() {
    if (this.addForm.valid) {

      /*let jsonHeader = new Headers({
        'Content-Type' : 'application/json'
      });*/

      let addTask = {
        date: this.addForm.controls['date'].value,
        title: this.addForm.controls['title'].value,
        description: this.addForm.controls['description'].value,
        priority: this.addForm.controls['priority'].value
      };
      console.log("task to be added" + addTask);
      this.service.addTask(new Task(addTask.date,addTask.title,addTask.description,addTask.priority))
        .subscribe(data => {
          console.log("this is data" + JSON.stringify(data))
        //alert(JSON.stringify(data))
      }, error => {
        alert(error)
      });
      //this.tasks.push(new Task(addTask.date,addTask.title,addTask.description,addTask.priority))
      console.log(addTask);// addTask var contains all our form values. store it where you want
      this.addForm.reset();// this will reset our form values to null
      /*return this.http.post('http://localhost:9000/add',addTask,
        {headers: jsonHeader}).map(data => {
        return this.extractData(data)}).catch(e => this.handleError(e));*/
    }
  }

  /*extractData(res: any) {
    let body = res.json();
    alert(body);
    return body;
  }

  private handleError(error:any) {
    let errMsg: string;
    try {
      if (JSON.parse(error._body).message) {
        errMsg = JSON.parse(error._body).message;
      }
      else {
        errMsg = 'Something went wrong. Please try again later.';
      }
    }
    catch(e) {
      errMsg = 'Something went wrong. Please try again later.'
    }
    return Observable.throw(new Error(errMsg));
  }*/

}
