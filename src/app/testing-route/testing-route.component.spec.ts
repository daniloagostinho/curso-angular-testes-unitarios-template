import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingRouteComponent } from './testing-route.component';

describe('TestingRouteComponent', () => {
  let component: TestingRouteComponent;
  let fixture: ComponentFixture<TestingRouteComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
