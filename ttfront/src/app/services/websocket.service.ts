import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) { }

  listen(event: string){
    return this.socket.fromEvent(event)
  }

  emitWithIdId(event: string, id: string ) {
    return this.socket.emit(event, id);
  }

  genericEmit(event: string ) {
    return this.socket.emit(event);
  }

  emitExchangeRate(event: string ) {
    return this.socket.emit(event);
  }
}
