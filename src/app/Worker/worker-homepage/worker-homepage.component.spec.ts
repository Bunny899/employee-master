import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerHomepageComponent } from './worker-homepage.component';

describe('WorkerHomepageComponent', () => {
  let component: WorkerHomepageComponent;
  let fixture: ComponentFixture<WorkerHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
