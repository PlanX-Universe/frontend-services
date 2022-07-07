// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  START_PAGE: 'home',
  managingServiceREST: 'http://localhost:8090',
  managingServiceWS: 'ws://localhost:8090',
  rabbitmqAdminDashboardUrl: 'http://localhost:15672/',
  version: 'v.0.1',
  requestTimeout: 60000 // in ms -> 1 minute
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
