import { TestBed } from '@angular/core/testing';
import { ApplyService } from './apply.service';

describe('ApplyService', () => {
  let service: ApplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call applyCourse endpoint', () => {
    const mockData = {
      name: 'John',
      email: 'john@example.com',
      phone: '123456',
      interest: 'Web Development',
      message: 'Test'
    };
    service.applyCourse(mockData).subscribe();
  });
});
