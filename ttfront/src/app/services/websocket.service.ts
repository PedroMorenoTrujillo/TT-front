import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) { }

  listen(event: string){
    console.log('listen', event)
    return this.socket.fromEvent(event)
  }

}
