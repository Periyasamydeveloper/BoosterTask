import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipeComponent } from './pipe/pipe.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { PromiseComponent } from './promise/promise.component';
import { MaterialExampleModule } from './material.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Filter } from './customfilter/filter.pipe';
import { BehaviourSubjecctComponent } from './behaviour-subjecct/behaviour-subjecct.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    PipeComponent,
    ViewChildComponent,
    PromiseComponent,
    Filter,
    BehaviourSubjecctComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
