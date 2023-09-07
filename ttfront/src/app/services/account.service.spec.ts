import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import { WebsocketService } from './websocket.service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: environment.socketsUrl };

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ SocketIoModule.forRoot(config) ],
      providers: [WebsocketService]
    });
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
