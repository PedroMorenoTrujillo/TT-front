import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountModel } from '../models/account.interface';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private websocketService: WebsocketService) {}

  getAccountById(): Observable<AccountModel> {
    return this.websocketService.listen(
      'accountId'
    ) as Observable<AccountModel>;
  }

  emitAccountById(id: string): void {
    this.websocketService.emitWithIdId('accountId', id);
  }

  getAccountsFromSockets(): Observable<AccountModel[]> {
    return this.websocketService.listen('account') as Observable<
      AccountModel[]
    >;
  }

  emitAccountsFromSockets(): void {
    return this.websocketService.genericEmit('account');
  }
}
