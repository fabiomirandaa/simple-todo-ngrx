import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodoCounterComponent } from './todo-counter.component';

describe('TodoCounterComponent', () => {
    let component: TodoCounterComponent;
    let fixture: ComponentFixture<TodoCounterComponent>;

    beforeEach(waitForAsync(() => {
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
