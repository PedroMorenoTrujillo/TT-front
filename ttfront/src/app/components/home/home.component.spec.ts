import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/services/account.service';
import { ExchangeService } from 'src/app/services/exchange.service';
import { of } from 'rxjs';

const config: SocketIoConfig = { url: environment.socketsUrl };

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let accountService: jasmine.SpyObj<AccountService>;
  let exchangeService: jasmine.SpyObj<ExchangeService>;

  accountService = jasmine.createSpyObj('AccountService', [
    'getAccountsFromSockets',
    'emitAccountsFromSockets',
  ]);
  exchangeService = jasmine.createSpyObj('ExchangeService', [
    'getExchangeFromSockets',
    'emitExchangeFromSocketsInit',
  ]);

  exchangeService.getExchangeFromSockets.and.returnValue(
    of({ _id: 'xxxxx', exchange: 55 })
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent, SocketIoModule.forRoot(config)],
      providers: [
        { provide: AccountService, useValue: accountService },
        { provide: ExchangeService, useValue: exchangeService },
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllAccounts and getExchangeRate on ngOnInit', () => {
    spyOn(component, 'getAllAccounts');
    spyOn(component, 'getExchangeRate');

    component.ngOnInit();

    expect(component.getAllAccounts).toHaveBeenCalled();
    expect(component.getExchangeRate).toHaveBeenCalled();
  });
});
