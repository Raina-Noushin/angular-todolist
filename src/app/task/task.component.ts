import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  // providers:[DatePipe]
})
export class TaskComponent implements OnInit {

  // @Input() name: string;

  // minDate: Date = new Date('01.01.2000');
  // maxDate: Date = new Date('01.01.2100');
  // myDate = Date.now();

  constructor(){

  }

  ngOnInit(): void {
  }
  title="Tasklist";

  todoList = new FormGroup({
    title:new FormControl(''),
    sort:new FormControl(''),
    date:new FormControl(''),
    status: new FormControl('yet to start'),


  })
    tasks=[{
   title:'task 1',
   sort:'step 1',
    date:'2002-22-01',
    status:'yet to start'
    },
    {
      title:'task 2',
      sort:'step 2',
       date:'2002-23-03',
       status:'yet to start'
       },

  ];
  updateItem(task){
 let number = this.tasks.indexOf(task);
 task.status="in progress";
 this.tasks[number]=task;
  }
  updateTask(task){
    let number = this.tasks.indexOf(task);
    task.status="completed";
    this.tasks[number]=task;
  }
 onSubmit(){
console.log(this.todoList.value);
this.tasks.push(this.todoList.value);
 }

//  private checkDateInRange(dateToCheck: any, minInput: Date, maxInput: Date): boolean {
//   //Console examples
//   if(minInput < dateToCheck && dateToCheck < maxInput){
//       //console.log('the date : ', dateToCheck, ' is more than', minInput, ' is less than', maxInput);
//       return true;
//   } else {
//     return false;
//   }

// }

}

