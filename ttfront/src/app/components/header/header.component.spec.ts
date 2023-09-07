import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { ExchangeService } from 'src/app/services/exchange.service';
import { of } from 'rxjs';
import { ExchangeModel } from 'src/app/models/exchange.interface';

const config: SocketIoConfig = { url: environment.socketsUrl };


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let exchangeService: jasmine.SpyObj<ExchangeService>;


  beforeEach(() => {
    exchangeService = jasmine.createSpyObj('ExchangeService', ['getExchangeFromSockets', 'emitExchangeFromSocketsInit', 'emitExchangeFromSockets']);

    TestBed.configureTestingModule({
      imports: [HeaderComponent, SocketIoModule.forRoot(config)],
      providers: [
        { provide: ExchangeService, useValue: exchangeService },
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getExchangeRate and getExchangeRateValue on ngOnInit', () => {
    spyOn(component, 'getExchangeRate');
    spyOn(component, 'getExchangeRateValue');

    component.ngOnInit();

    expect(component.getExchangeRate).toHaveBeenCalled();
    expect(component.getExchangeRateValue).toHaveBeenCalled();
  });

  it('should set exchangeValue from exchangeService', () => {
    const mockExchange: ExchangeModel = { _id: 'xxxxx',
    exchange: 55, };
    exchangeService.getExchangeFromSockets.and.returnValue(of(mockExchange));

    component.getExchangeRate();

    component.exchangeValue.subscribe((value) => {
      expect(value).toEqual(mockExchange);
    });
  });

});
