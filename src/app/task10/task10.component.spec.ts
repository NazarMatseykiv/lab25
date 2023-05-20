import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task10 } from './task10.component';

describe('Task10', () => {
  let component: Task10;
  let fixture: ComponentFixture<Task10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task10 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});