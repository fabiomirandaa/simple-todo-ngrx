import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
    let component: TodoFormComponent;
    let fixture: ComponentFixture<TodoFormComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ TodoFormComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
