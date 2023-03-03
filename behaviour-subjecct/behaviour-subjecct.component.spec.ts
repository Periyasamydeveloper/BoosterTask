import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjecctComponent } from './behaviour-subjecct.component';

describe('BehaviourSubjecctComponent', () => {
  let component: BehaviourSubjecctComponent;
  let fixture: ComponentFixture<BehaviourSubjecctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviourSubjecctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourSubjecctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
