var myApp = myApp || {};
var TweenMax = TweenMax || {};
var Back = Back || {};

myApp.aniMe = (function(tm) {
  'use strict';
  
  var _offset;
  var _delay;
  var _from;
  var _to;
  
  function _setSettings(settings) {
    _offset = settings.offset || 1;
    _delay = settings.offset || 0.01;
    
    _from = settings.offset || {
        scale: 0.2, 
        opacity: 0,
        transformOrigin: '50%',
      };
      
    _to = settings.offset || {
      scale: 1, 
      opacity: 1,
      ease:Back.easeOut
    };
  }
  
  function _animate(groupName, startTime) {
    var group = document.querySelectorAll(groupName + ' polygon');
    
    for(var i=0; i < group.length; i++) {
      tm.fromTo(group[i], 1, _from, _to).startTime(startTime);
    }
  }
   
  function init(settings) {
    
    if (settings) {
      _setSettings(settings);
    } else {
      _setSettings({});
    }
    
    _animate('#shirt', _offset);
    _animate('#neck', _offset + 0.2);
    _animate('#face', _offset + 0.4);
    _animate('#ears', _offset + 0.5);
    _animate('#nose', _offset + 0.7);
    _animate('#hair', _offset + 0.8);
    _animate('#forehead', _offset + 0.9);
    _animate('#glasses', _offset + 1);
  }
  
  return {
    init: init
  };
  
})(TweenMax);