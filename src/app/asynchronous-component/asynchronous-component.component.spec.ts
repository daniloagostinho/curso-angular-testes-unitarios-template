import { HttpService } from './../service/http.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousComponentComponent } from './asynchronous-component.component';

describe('AsynchronousComponentComponent', () => {
  let component: AsynchronousComponentComponent;
  let fixture: ComponentFixture<AsynchronousComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
