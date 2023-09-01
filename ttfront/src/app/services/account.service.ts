import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AccountModel } from '../models/account.interface';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccounts():Observable<AccountModel[]>{
    return this.http.get<AccountModel[]>('http://localhost:3000/account');
  }

  getAccountById(id:string): Observable<AccountModel>{
    return this.http.get<AccountModel>(`http://localhost:3000/account/${id}`)
  }
}
