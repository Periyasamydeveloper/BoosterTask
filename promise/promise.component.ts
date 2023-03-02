import { Component } from '@angular/core';
import { TasksServices } from '../Services/TasksServices';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {
behaviourMessage:any;

  constructor(private tasksServices:TasksServices){}

  ngOnInit(){
    this.getBehaviourMessage();
  }

getBehaviourMessage(){
 this.tasksServices.currentMessage.subscribe((res:any)=>{
this.behaviourMessage = res;
 });
}

}
