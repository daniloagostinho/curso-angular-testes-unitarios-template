import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleEventComponent } from './handle-event.component';

describe('HandleEventComponent', () => {
  let component: HandleEventComponent;
  let fixture: ComponentFixture<HandleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
