Package.describe({
  name: 'l0oky:meni.js',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A convenient client javascript library for making dynamic tabbed menus',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/l0oky/meni.js-meteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'lib/meni.js/README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.use('jquery', 'client');
  api.use('stevezhu:lodash@4.11.1', 'client');
  api.export("meni");
  api.addFiles('lib/meni.js/meni.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('l0oky:meni.js');
  api.mainModule('meni-tests.js');
});
