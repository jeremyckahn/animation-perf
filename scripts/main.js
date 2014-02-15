require.config({
  baseUrl: '/'
  ,paths: {
    underscore: 'bower_components/underscore/underscore'
    ,shifty: 'bower_components/shifty/dist/shifty'
    ,rekapi: 'bower_components/rekapi/dist/rekapi'
  }
});

require(['rekapi'], function (Rekapi) {
  'use strict';
  console.log(Rekapi);
});
