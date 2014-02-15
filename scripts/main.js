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
  var testActorDiv = document.querySelector('.test-actor');
  var tweenBtn = document.querySelector('#tween');
  var stopBtn = document.querySelector('#stop');
  var tweenWithBackgroundBtn = document.querySelector('#tween-with-background');
  var useCSSCheckbox = document.querySelector('#use-css');

  var rekapi = new Rekapi(document.body);
  var testActor = rekapi.addActor({context: testActorDiv});

  function killAnimation () {
    stopAnimation();
    rekapi.update(0);
    testActor.removeAllKeyframes();
    testActorDiv.setAttribute('style', '');
  }

  function playAnimation () {
    if (useCSSCheckbox.checked) {
      rekapi.renderer.play();
    } else {
      rekapi.play();
    }
  }

  function stopAnimation () {
    rekapi.renderer.stop();
    rekapi.stop();
  }

  tweenBtn.addEventListener('click', function () {
    killAnimation();

    testActor
      .keyframe(0, {
        transform: 'translateX(0px) translateY(0px)'
      })
      .keyframe(1500, {
        transform: 'translateX(300px) translateY(300px)'
      });

    playAnimation();
  });

  tweenWithBackgroundBtn.addEventListener('click', function () {
    killAnimation();

    testActor
      .keyframe(0, {
        transform: 'translateX(0px) translateY(0px)'
        ,background: '#f00'
      })
      .keyframe(1500, {
        transform: 'translateX(300px) translateY(300px)'
        ,background: '#00f'
      });

    playAnimation();
  });

  stopBtn.addEventListener('click', stopAnimation);
});
