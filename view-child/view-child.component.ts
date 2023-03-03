import { HttpParams } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksServices } from '../Services/TasksServices';

export interface PeriodicElement {
  resourceName:string;
  resourceSalery:any;
  resourceRole:string;
}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {
  resourceRsepose!:PeriodicElement;
  dataSource:any;
  displayedColumns:string[]=['name','role','salery'];
  selectedValue:any;
  total: any;
  isNoData: boolean = true;
constructor(private tasksService:TasksServices,public matDialogRef:MatDialogRef<ViewChildComponent>,@Inject(MAT_DIALOG_DATA) public data:DialogData,){}

ngOnInit() {
  this.getResourceData()
}

  getResourceData(){
    let param=new HttpParams().set('identity',"269cfff8-d4a6-4412-8c15-58e4ef178096");
    this.tasksService.getResourceData(param).subscribe((res:any) => {
      this.total=res.length;
      const ELEMENT_DATA: PeriodicElement[] = [];
      if(res){
      let responceArray = res;
      responceArray.forEach((element:any) => {
        this.builldEmptyElement();
        this.resourceRsepose.resourceName = element.name;
        this.resourceRsepose.resourceRole = element.role;
        this.resourceRsepose.resourceSalery = element.sal;
       ELEMENT_DATA.push( this.resourceRsepose);
      
      });
      this.dataSource =ELEMENT_DATA;
    }else{
      this.isNoData = false;
    }
      
    },(error:Response)=>{
      console.log(error)
    });
  }

  builldEmptyElement(){
    this.resourceRsepose={
    resourceName : "",
    resourceRole : "",
    resourceSalery : ""
  }
  }

  onNoClick(){
    this.matDialogRef.close();
  }

  onOkClick(){
    let array = this.dataSource;
    array.forEach((value:any)=>{
      if(this.selectedValue == value.resourceName){
        let tempArray:any[]=[];
        tempArray.push(value);
       this.matDialogRef.close(tempArray);
      }
    })
  }
}
export interface DialogData {
  title: string;
  content: string;
  exit: string;
  save: string;
}
