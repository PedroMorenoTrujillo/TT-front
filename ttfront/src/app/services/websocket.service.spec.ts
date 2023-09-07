import { TestBed } from '@angular/core/testing';

import { WebsocketService } from './websocket.service';
import { Socket, SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

const config: SocketIoConfig = { url: environment.socketsUrl };


describe('WebsocketService', () => {
  let service: WebsocketService;
  let socket: jasmine.SpyObj<Socket>;

  beforeEach(() => {

    socket = jasmine.createSpyObj('Socket', ['fromEvent', 'emit']);

    TestBed.configureTestingModule({
      imports: [ SocketIoModule.forRoot(config) ],
      providers: [
        WebsocketService,
        { provide: Socket, useValue: socket },
      ],
    });
    service = TestBed.inject(WebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should listen to an event', () => {
    const eventName = 'test-event';
    const testData = { message: 'Hello, World!' };

    socket.fromEvent.and.returnValue(of(testData));

    service.listen(eventName).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    expect(socket.fromEvent).toHaveBeenCalledWith(eventName);
  });

  it('should emit with id', () => {
    const eventName = 'test-event';
    const id = '123';

    service.emitWithIdId(eventName, id);

    expect(socket.emit).toHaveBeenCalledWith(eventName, id);
  });

  it('should emit a generic event', () => {
    const eventName = 'test-event';

    service.genericEmit(eventName);

    expect(socket.emit).toHaveBeenCalledWith(eventName);
  });

  it('should emit an exchange rate event', () => {
    const eventName = 'exchange-rate';

    service.emitExchangeRate(eventName);

    expect(socket.emit).toHaveBeenCalledWith(eventName);
  });
});
