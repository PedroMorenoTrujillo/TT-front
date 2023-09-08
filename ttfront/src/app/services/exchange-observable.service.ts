import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExchangeModel } from '../models/exchange.interface';

@Injectable({
  providedIn: 'root',
})
export class ExchangeObservableService {
  constructor() {}

  private exchangeObservableSource: BehaviorSubject<ExchangeModel> =
    new BehaviorSubject<ExchangeModel>({} as ExchangeModel);

  exchangeObservableSource$ = this.exchangeObservableSource;

  exchangeObservableSourceNext(exchange: ExchangeModel) {
    this.exchangeObservableSource.next(exchange);
  }
}
