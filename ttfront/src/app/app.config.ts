import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: environment.socketsUrl, options: {} };


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
  importProvidersFrom(
    SocketIoModule.forRoot(config)
  )
  ]
};
