import { Component, ViewChild } from '@angular/core';
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

  @ViewChild(ViewChildComponent) viewChild : any;
  viewChildComponent: any;
  constructor(private tasksServices : TasksServices){}

  ngOnInit(){
   this.viewChildComponent = this.viewChild.viewValue;
  this.tasksServices.value.subscribe((res:any)=>{
    console.log("value is"+res);
    this.observableCount = res;
  });
}
}