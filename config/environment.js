/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'kotlinrace',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    i18n: {
      defaultLocale: 'ru'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline' https://mc.yandex.ru http://mc.yandex.ru",
    'font-src': "'self'",
    'connect-src': "'self'",
    'img-src': "'self' https://mc.yandex.ru",
    'style-src': "'self' 'unsafe-inline'",
    'media-src': "'self'"
  }

  if (environment === 'production') {

  }




  return ENV;
};
