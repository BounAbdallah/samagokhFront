import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './Services/app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
  providers: [
    provideRouter(routes),
    provideClientHydration()


<<<<<<< HEAD

  ]};
=======
  ];
>>>>>>> e19603910976ca1e27a5a87ed88825f4d6d72c81
