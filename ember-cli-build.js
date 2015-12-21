/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // css
  app.import('vendor/css/animate.min.css');
  app.import('vendor/css/bootstrap.min.css');
  app.import('vendor/css/font-awesome.css');
  app.import('vendor/css/font-awesome.min.css');
  app.import('vendor/css/main.css');
  app.import('vendor/css/prettyPhoto.css');
  app.import('vendor/css/responsive.css');

  // fonts
  app.import('vendor/fonts/fontawesome-webfont.ttf');
  app.import('vendor/fonts/FontAwesome.otf');
  app.import('vendor/fonts/glyphicons-halflings-regular.ttf');

  // javascript
  app.import('vendor/js/bootstrap.min.js');
  app.import('vendor/js/html5shiv.js');
  app.import('vendor/js/jquery.isotope.min.js');
  app.import('vendor/js/jquery.js');
  app.import('vendor/js/jquery.prettyPhoto.js');
  app.import('vendor/js/main.js');
  app.import('vendor/js/respond.min.js');
  app.import('vendor/js/wow.min.js');


  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
