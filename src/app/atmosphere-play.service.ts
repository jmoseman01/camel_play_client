import { Injectable } from '@angular/core';
import * as atmosphere from 'atmosphere.js';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtmospherePlayService {
  subSocket: Atmosphere.Request;

  constructor() {

    const socket = atmosphere;

    const request = new atmosphere.AtmosphereRequest();
    request.url = 'ws://localhost:8080/camel/chat'
    request.contentType = "application/json";
    request.transport = 'websocket';
    request.fallbackTransport = 'long-polling';

    this.subSocket = socket.subscribe(request);
  }
  push(){
    this.subSocket.push("test");
  }
}
