import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeModel } from '../models/exchange.interface';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private websocketService: WebsocketService) {
    this.emitExchangeFromSockets();
  }

  getExchangeFromSockets(): Observable<ExchangeModel> {
    return this.websocketService.listen(
      'exchange'
    ) as Observable<ExchangeModel>;
  }

  emitExchangeFromSockets(): void {
    this.websocketService.genericEmit('exchange');
  }
}
