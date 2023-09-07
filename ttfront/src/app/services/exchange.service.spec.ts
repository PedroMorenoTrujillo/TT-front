import { TestBed } from '@angular/core/testing';

import { ExchangeService } from './exchange.service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { WebsocketService } from './websocket.service';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: environment.socketsUrl };

describe('ExchangeService', () => {
  let service: ExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ SocketIoModule.forRoot(config) ],
      providers: [WebsocketService]
    });
    service = TestBed.inject(ExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
