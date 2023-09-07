import { TestBed } from '@angular/core/testing';

import { ExchangeObservableService } from './exchange-observable.service';
import { ExchangeModel } from '../models/exchange.interface';
import { Observable } from 'rxjs';

describe('ExchangeObservableService', () => {
  let service: ExchangeObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should change the observavle value when execute function', () => {
    const exchangeModelMock: ExchangeModel = {
      _id: 'xxxxx',
      exchange: 55,
    };
    service.exchangeObservableSourceNext(exchangeModelMock);
    
    service.exchangeObservableSource$.subscribe((value) => {
      expect(value).toEqual(exchangeModelMock);
    });
  });
});

