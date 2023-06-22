// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'projectam0-app',
    appId: '1:304185596943:web:e4c4382b85abe09db1577a',
    storageBucket: 'projectam0-app.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyAg_GL_W2_Ga30snZChhuuZV4aoMViKxqI',
    authDomain: 'projectam0-app.firebaseapp.com',
    messagingSenderId: '304185596943',
    measurementId: 'G-CEM47SH3SG',
  },
 
  production: false,
  /*DEVELOPMENT --> */  URL: 'http://localhost:8080/',
  /*PRODUCTION --> */ //URL: 'https://backam0.onrender.com/'

}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
