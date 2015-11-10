/**
 * 
 * ajax-load.js v1.0.1
 * https://github.com/obetoferreira/ajax-load
 *
 */
document.addEventListener('DOMContentLoaded', function(){

  /**
   * Ajax Load
   */
  var ajaxLoad = function( content, container, callback ){
    containerNode = document.querySelectorAll( container );
    // Ajax get
    var request = new XMLHttpRequest();
    request.open('GET', content, true);
    request.onload = function(){
      if ( request.status >= 200 && request.status < 400 ) {
        // Success!
        var ajaxData = request.responseText;
        for ( var i = 0; i < containerNode.length; i++ ) {
          var el = containerNode[i];
          el.classList.add('ajax-loaded');
          el.innerHTML = ajaxData;
        }
        if ( callback ) {
          callback();
        }
      } else {
        // Fail
        console.log( request.status );
      }
    }
    request.onerror = function(){
      console.log( request.status );
    }
    request.send();
  }
  window.ajaxLoad = ajaxLoad;


  /**
   * Ajax destroy
   */
  var ajaxDestroy = function( target, callback ){
    targetNode = document.querySelectorAll( target );
    for ( var i = 0; i < targetNode.length; i++ ) {
      var el = targetNode[i];
      el.classList.remove('ajax-loaded');
      el.classList.add('ajax-destroyed');
      setTimeout(function(){
        el.innerHTML = '';
      }, 1000);
    }
    if ( callback ) {
      callback();
    }
  }
  window.ajaxDestroy = ajaxDestroy;


  /**
   * data-ajax-load
   */
  (function() {
    // Get all elements with [data-ajax-load] attribute
    var dataLoadNode = document.querySelectorAll( '*[data-ajax-load]' );
    // Add event listener on each [data-ajax-load]
    for (var i = 0; i < dataLoadNode.length; i++) {
      dataLoadNode[i].addEventListener('click', function( event ) {
        event.preventDefault();
        // Get the attributes
        var content   = this.getAttribute('href'),
            container = this.getAttribute('data-ajax-load'),
            callback  = this.getAttribute( 'data-ajax-callback' );
        // Call 'ajaxLoad' function
        ajaxLoad( content, container, callback );
      });
    }
  }() );


  /**
   * data-ajax-destroy
   */
  (function() {
    // Get all elements with [data-ajax-destroy] attribute
    var ajaxDestroyNode = document.querySelectorAll( '*[data-ajax-destroy]' );
    for (var i = 0; i < ajaxDestroyNode.length; i++) {
      // Add event listener on each [data-ajax-destroy]
      ajaxDestroyNode[i].addEventListener('click', function(event) {
        event.preventDefault();
        // Get the attributes
        var target   = this.getAttribute('data-ajax-destroy'),
            callback = this.getAttribute('data-ajax-callback');
        // Call 'ajaxDestroy' function
        ajaxDestroy( target, callback );
      });
    }
  }() );


  /**
   * Auto init elements with class 'ajax-init'
   */
  (function() {
    // Get all elements with 'ajax-init' classname
    var ajaxInitNode = document.getElementsByClassName('ajax-init');
    for (var i = 0; i < ajaxInitNode.length; i++) {
      // Get the attributes
      var el = ajaxInitNode[i];
      var content   = el.getAttribute('href'),
          container = el.getAttribute('data-ajax-load'),
          callback  = el.getAttribute('data-ajax-callback');

      // Call 'ajaxLoad' function
      ajaxLoad( content, container, callback );
    }
  }() );

  // The end
});
