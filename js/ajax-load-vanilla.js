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
  var ajaxLoad = function( content, container, transition ){
    containerNode = document.querySelectorAll( container );
    // Ajax get
    var request = new XMLHttpRequest();
    request.open('GET', content, true);
    request.onload = function(){
      if ( request.status >= 200 && request.status < 400 ) {
        // Success!
        var ajaxData = request.responseText;
        for ( var i = 0; i < containerNode.length; i++ ) {
          containerNode[i].innerHTML = ajaxData;
        }
      } else {
        // Fail
        alert('Houve um erro ao carregar o conteúdo.');
      }
    }
    request.onerror = function(){
      alert('Houve um erro ao carregar o conteúdo.');
    }
    request.send();
  }
  window.ajaxLoad = ajaxLoad;


  /**
   * Ajax destroy
   */
  var ajaxDestroy = function( target, transition ){
    targetNode = document.querySelectorAll( target );
    for ( var i = 0; i < targetNode.length; i++ ) {
      targetNode[i].innerHTML = '';
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
        var content    = this.getAttribute('href'),
            container  = this.getAttribute('data-ajax-load'),
            transition = this.getAttribute( 'data-ajax-transition' ),
            callback   = this.getAttribute( 'data-ajax-callback' );
        // Call 'ajaxLoad' function
        ajaxLoad( content, container, transition );
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
        var target     = this.getAttribute('data-ajax-destroy'),
            transition = this.getAttribute('data-ajax-transition'),
            callback   = this.getAttribute('data-ajax-callback');
        // Call 'ajaxDestroy' function
        ajaxDestroy( target, transition );
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
      var content    = el.getAttribute('href'),
          container  = el.getAttribute('data-ajax-load'),
          transition = el.getAttribute('data-ajax-transition'),
          callback   = el.getAttribute('data-ajax-callback');

      // Call 'ajaxLoad' function
      ajaxLoad( content, container, transition );
    }
  }() );

  // The end
});
