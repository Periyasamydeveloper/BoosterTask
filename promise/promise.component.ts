import { HttpParams } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { PipeComponent } from '../pipe/pipe.component';
import { TasksServices } from '../Services/TasksServices';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {
  @ViewChild(PipeComponent) viewChild:any;
  behaviourMessage:any;
  resource!:any;
  constructor(private tasksServices:TasksServices){}

  ngOnInit(){
    let param=new HttpParams().set('identity',"269cfff8-d4a6-4412-8c15-58e4ef178096");
    this.getBehaviourMessage();
    this.tasksServices.getResourceData(param).toPromise().then((response:any)=>{
      this.resource = response;
    });
    
  }

getBehaviourMessage(){
 this.tasksServices.currentMessage.subscribe((res:any)=>{
this.behaviourMessage = res;
 });
}

viewChildMethod(){
 this.viewChild.viewValue = false;
}


}
// export interface Resource {
//   resourceName:string;
//   resourceSalery:any;
//   resourceRole:string;
// }
