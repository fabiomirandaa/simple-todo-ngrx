import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodoHomeComponent } from './todo-home.component';

describe('TodoHomeComponent', () => {
    let component: TodoHomeComponent;
    let fixture: ComponentFixture<TodoHomeComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ TodoHomeComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
