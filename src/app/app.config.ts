import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; 
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Added HTTP client provider import

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    
    provideRouter(
      routes, 
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled', // تفعيل الـ Scroll للـ ID
        scrollPositionRestoration: 'enabled' // يرجعك لفوق لما تغير الصفحة
      })
    ), 
    
    provideClientHydration(withEventReplay()),
    
    provideHttpClient() // Added here to enable HTTP requests across the application
  ]
};