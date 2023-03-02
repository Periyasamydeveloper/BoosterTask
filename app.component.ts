import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasksServices } from './Services/TasksServices';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample_project';
  showChild:boolean=false;
  showViewChild:boolean=false;
  parent:any="Parent";
  dataSource:any[]=[];
  promiseComponent:boolean=false;
constructor(private matDialog:MatDialog,private behaviourService:TasksServices){}

  showChildComponent(){
    this.showViewChild=false;
    this.promiseComponent = false;
   this.showChild=true;
  }

  showViewChildComponent(){
    this.showChild = false;
    this.promiseComponent = false;
    this.showViewChild=true;
  }

  bindChildValue(event:any){
    if(event.role){
      this.parent=event.role;
    }else{
      this.parent=event;
    }
  }

  openDialog(){
    const dialofRef=this.matDialog.open(ViewChildComponent,{
      disableClose: true,
      width: '1000px',
        data:{
          content:this.parent
        },
    });
    dialofRef.afterClosed().subscribe((res:any)=>{
      this.dataSource = res;
    })
  }

  sendMessageToBehaviorSubject(){
    this.behaviourService.behaviourSubjectMessage(this.parent);
    this.showChild = false;
    this.showViewChild=false;
    this.promiseComponent = true;
  }
}
export interface DialogData {
  content: string;
}

