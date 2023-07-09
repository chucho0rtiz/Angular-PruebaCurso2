import { Component, OnInit } from '@angular/core';
import { Task } from '../..//interfaces/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  public taskListNoCompleted: any[];
  public taskListCompleted: any[];
  public showInputTask: boolean;
  public errorInput: boolean;
  public showCompleted: boolean;

  constructor() {
    this.taskListCompleted = [];
    this.taskListNoCompleted = [];
    this.showInputTask = false;
    this.errorInput = false;
    this.showCompleted = true;

  }

  ngOnInit() {

  }

  sowInputTextTask() {
    this.showInputTask = true;
  }

  addTask(data: any){
    if (data) {
      const task: Task = {
        'date': new Date(),
        'description': data,
        'completed': false
      }
  
      this.taskListNoCompleted.push(task);
      this.errorInput=false;
      this.showInputTask = false;
    } else {
      this.errorInput=true;
    }
  }

  taskCheckedEvent($event:any) {
    const task = this.taskListNoCompleted[$event];
    task.completed=true;
    task.date = new Date();
    this.taskListNoCompleted.splice($event, 1);
    this.taskListCompleted.push(task);
  }

  removeEvent($event:any) {
    this.taskListNoCompleted.splice($event, 1);
  }

  showTaskCompleted() {
    this.showCompleted = !this.showCompleted;
  }
}
