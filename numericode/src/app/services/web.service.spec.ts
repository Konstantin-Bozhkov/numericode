import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WebService } from './web.service';

describe('WebService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    })
  }));

  it('should be created', () => {
    const service: WebService = TestBed.get(WebService);
    expect(service).toBeTruthy();
  });
});
