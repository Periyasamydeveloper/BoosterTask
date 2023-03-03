import { Component, ViewChild } from '@angular/core';
import { PromiseComponent } from '../promise/promise.component';
import { TasksServices } from '../Services/TasksServices';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  search = '';
  list = [
      'Dinu',
      'sekar',
      'raghu',
      'Megha'
  ];
  observableCount !: number ;
  viewValue !: boolean;
  constructor(private tasksServices : TasksServices){}

  ngOnInit(){
    this.viewValue = true;
  this.tasksServices.value.subscribe((res:any)=>{
    this.observableCount = res;
  });
}
}