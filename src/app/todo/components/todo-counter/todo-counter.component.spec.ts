import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCounterComponent } from './todo-counter.component';

describe('TodoCounterComponent', () => {
  let component: TodoCounterComponent;
  let fixture: ComponentFixture<TodoCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
