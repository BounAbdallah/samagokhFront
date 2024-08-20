import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// <<<<<<< HEAD
// import { routes } from './app.routes';
// import { provideHttpClient ,withFetch} from '@angular/common/http';
// =======
import { routes } from './Services/app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
// >>>>>>> remotes/origin/feature/mbombe

export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes),]
// };
  providers: [
    provideRouter(routes), provideHttpClient()
// <<<<<<< HEAD
    // provideClientHydration()


// <<<<<<< HEAD

  // ]};
// =======
    // provideHttpClient(withFetch())
  ]
};
// >>>>>>> remotes/origin/feature/admin
// =======
  // ];
// >>>>>>> remotes/origin/feature/mbombe
