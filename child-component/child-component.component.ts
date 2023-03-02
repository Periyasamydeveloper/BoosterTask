import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Output() outputEmit=new EventEmitter<any>();
  @Input() inputEmit:any;
  value:string = 'Child';
  ngStyleValue: any;
  ngClassVariable: boolean=false;
  NgClassVariableValue: any;
 

  ngOnInit(): void {
    this.value = this.inputEmit;
  }
  outputEmitMethod(data:any){
   this.outputEmit.emit(data);
   this.ngStyleValue = data.name;
  }

  // Ng For
  Resource:Cbg[]=[
    {
      name:'Prem',role:'Developer',salery:3000
    },
    {
      name:'Saravanan',role:'Developer',salery:40000
    },
    {
      name:"Velu",role:"null",salery:8000
    }
  ]

  getColor(){
    let ngStyleColor = this.ngStyleValue;
    return (ngStyleColor=='Prem')?'Orange':((ngStyleColor=='Saravanan')?'Blue':'rgb(70, 96, 67)');
  }

  ngClassMethod(value:boolean,data:any){
    this.NgClassVariableValue = data;
    this.ngClassVariable = value;
  }
}
export interface Cbg{
  name:string;
  role:string;
  salery:number;
}
