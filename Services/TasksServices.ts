import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
const BaseUrl ='http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class TasksServices {
count:number=0;

  constructor(private http: HttpClient) { }

message= new BehaviorSubject('undefined');
currentMessage = this.message.asObservable();

  getResourceData(param?:any){
    return this.http.get(BaseUrl+"/api/get",{params:param});
  }

  behaviourSubjectMessage(message:any){
    this.message.next(message);
  }

value =new Observable((observer) => {
    setInterval(() => { observer.next(this.count++) },1000);
  })
}