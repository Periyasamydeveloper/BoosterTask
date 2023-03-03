import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BehaviourSubjecctComponent } from './behaviour-subjecct/behaviour-subjecct.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path:'first-component',component:AppComponent},
  {path:'input',component:PromiseComponent},
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }
  // {path:'output',component:PromiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
