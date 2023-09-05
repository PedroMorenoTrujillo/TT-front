import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeModel } from '../models/exchange.interface';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient, private websocketService: WebsocketService) { }

  getExchangeFromSockets(): Observable<ExchangeModel>{
    return this.websocketService.listen('exchange') as Observable<ExchangeModel>
  }

}
