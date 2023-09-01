import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { Observable } from 'rxjs';
import { AccountModel } from 'src/app/models/account.interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [AccountService]
})
export class DetailsComponent implements OnInit{

  account: Observable<AccountModel> = new Observable<AccountModel>()

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly accountService: AccountService){}
  
  ngOnInit(): void {
    const id = this.activatedRoute?.snapshot?.params['id'];
    if(id) this.account = this.accountService.getAccountById(id)

  }


}
