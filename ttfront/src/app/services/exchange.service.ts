import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeModel } from '../models/exchange.interface';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) { }

  getExchange(): Observable<ExchangeModel>{
    return this.http.get<ExchangeModel>('http://localhost:3000/exchange');
  }
}
