import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { MyServiceService } from './my-service.service';

class MyServiceMock extends MyServiceService {
  response = [];
  override getUsers() {
    return of(this.response)
  }

}

describe('MyServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: MyServiceService,
          useClass: MyServiceMock
        }
      ]
    });
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
