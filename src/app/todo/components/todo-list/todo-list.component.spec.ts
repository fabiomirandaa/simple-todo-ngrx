import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
    imports: [TodoListComponent]
})
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
