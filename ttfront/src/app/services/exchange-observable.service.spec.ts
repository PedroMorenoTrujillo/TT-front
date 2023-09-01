import { TestBed } from '@angular/core/testing';

import { ExchangeObservableService } from './exchange-observable.service';

describe('ExchangeObservableService', () => {
  let service: ExchangeObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
