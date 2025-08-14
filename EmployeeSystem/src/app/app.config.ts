import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    
     provideHttpClient(), 
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    HttpClient, provideHttpClient(withInterceptors([authInterceptor])),
    provideToastr({
  positionClass: 'toast-top-right',
  timeOut: 5000,
  closeButton: true,
  progressBar: true,
  newestOnTop:true,
  tapToDismiss:true,
  

}),


  ]
};
