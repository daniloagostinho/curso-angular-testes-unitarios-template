import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ConceptsTestsComponent } from './concepts-tests.component';

describe('ConceptsTestsComponent', () => {

  let component: ConceptsTestsComponent;
  let fixture: ComponentFixture<ConceptsTestsComponent>

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ConceptsTestsComponent],
    }).compileComponents()


    fixture = TestBed.createComponent(ConceptsTestsComponent)
    component = fixture.componentInstance
    fixture.detectChanges();
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ConceptsTestsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

})
