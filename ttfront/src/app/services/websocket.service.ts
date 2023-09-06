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

  emitAccountId(event: string, id: string ) {
    return this.socket.emit(event, id);
  }
}
