import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-behaviour-subjecct',
  templateUrl: './behaviour-subjecct.component.html',
  styleUrls: ['./behaviour-subjecct.component.css']
})
export class BehaviourSubjecctComponent {
  @Input() inputFromChild:any;
  constructor(private router:Router){

  }

  ngOnInit(){
    console.log(this.inputFromChild);
  }
  outputEmitMethod(){
    this.router.navigate(['/output'])
  }
}
