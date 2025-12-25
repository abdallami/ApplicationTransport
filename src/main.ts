import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import {
  addOutline,
  createOutline,
  trashOutline,
  personOutline,
  closeCircleOutline,
  phonePortraitOutline,
  mailOutline,
  closeOutline,
  saveOutline,
  logInOutline,
  logOutOutline,
  lockClosedOutline,
  eyeOffOutline,
  eyeOutline,
  arrowBackOutline,
  personAddOutline,
  logoGoogle,
  logoGithub,
  logoFacebook,
  ticketOutline,
  cubeOutline,
  busOutline,
  locateOutline
} from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
<<<<<<< HEAD

import { mail, home, person, settings, notifications, helpCircle, calendar, cube, business, airplane, location, chatbubbles, refreshCircle, ticketOutline, cubeOutline, locateOutline, busOutline, bulbOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

// Ajout des icônes
addIcons({
  'mail': mail,
  'home': home,
  'person': person,
  'settings': settings,
  'notifications': notifications,
  'help-circle': helpCircle,
   'refresh-circle':refreshCircle,
   'ticket-outline':ticketOutline,
   'cube-outline':cubeOutline,
   'location-outline':locateOutline,
   'bus-outline':busOutline,
   'bulb-outline':bulbOutline
=======
import { addIcons } from 'ionicons';

addIcons({
  'ticket-outline': ticketOutline,
  'cube-outline': cubeOutline,
  'bus-outline': busOutline,
  'location-outline': locateOutline,
  'add-outline': addOutline,
  'create-outline': createOutline,
  'trash-outline': trashOutline,
  'person-outline': personOutline,
  'close-circle-outline': closeCircleOutline,
  'phone-outline': phonePortraitOutline,
  'mail-outline': mailOutline,
  'close-outline': closeOutline,
  'save-outline': saveOutline,
  'login-outline': logInOutline,
  'log-out-outline': logOutOutline,
  'lock-closed-outline': lockClosedOutline,
  'eye-off-outline': eyeOffOutline,
  'eye-outline': eyeOutline,
  'arrow-back-outline': arrowBackOutline,
  'person-add-outline': personAddOutline,
  'logo-google': logoGoogle,
  'logo-facebook': logoFacebook,
  'logo-github': logoGithub,
>>>>>>> connexion
});


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
  ],
});
