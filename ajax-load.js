/**
*
* Generic function to load ajax content
*
**/
$( function(){

  /**
  *
  * Ajax Load
  *
  **/
  var ajaxLoad = function( content, container, transition, callback ){

    // Ajax call
    $.ajax({
      url: content,
      type: 'GET',
      dataType: 'html'
    })
    .done(function( data ) {
      // Transitions
      switch( transition ){
        case 'fade':
          $( container ).fadeOut('slow', function() {
            $(this).html( data ).fadeIn(function(){
              if ( callback ) { callback(); }
            });
          });
          break;
        case 'slide':
          $( container ).slideUp('slow', function() {
            $(this).html( data ).slideDown(function(){
              if ( callback ) { callback(); }
            });
          });
          break;
        default:
          $( container ).html( data );
          if ( callback ) { callback(); }
          break;
      }
    })
    .fail(function() {
      // Error message
      alert('Houve um erro ao carregar o conteúdo.');
    })
    .always(function() {
    });
  }
  window.ajaxLoad = ajaxLoad;


  /**
  *
  * Ajax destroy
  *
  **/
  var ajaxDestroy = function( target, transition, callback ){
    // Transitions
    switch( transition ){
      case 'fade':
        $( target ).fadeOut('slow', function() {
          $(this).remove();
          if ( callback ) { callback(); }
        });
        break;
      case 'slide':
        $( target ).slideUp('slow', function() {
          $(this).remove();
          if ( callback ) { callback(); }
        });
        break;
      default:
        $( target ).remove();
        if ( callback ) { callback(); }
        break;
    }
  }
  window.ajaxDestroy = ajaxDestroy;


  /**
  *
  * data-ajax-load
  *
  **/
  $(document).on('click', '*[data-ajax-load]', function(event) {
    event.preventDefault();
    window.showLoader();

    // Variables
    var content = $(this).attr('href'),
        container = $(this).data('ajax-load'),
        transition = $(this).data('ajax-transition'),
        callback = $(this).data('ajax-callback');

    ajaxLoad( content, container, transition, function(){
      window[eval( callback )];
    } );
    window.hideLoader();
  });


  /**
  *
  * data-ajax-destroy
  *
  **/
  $(document).on('click', '*[data-ajax-destroy]', function(event) {
    event.preventDefault();

    // Variables
    var target = $(this).data('ajax-destroy'),
        transition = $(this).data('ajax-transition'),
        callback = $(this).data('ajax-callback');

    ajaxDestroy( target, transition, function(){
      window[eval( callback )];
    } );
  });


  /**
  *
  * Auto init elements with class 'ajax-init'
  *
  **/
  $( function(){
    $('.ajax-init').each(function(index, el) {
      var content = $(this).attr('href'),
          container = $(this).data('ajax-load'),
          transition = $(this).data('ajax-transition'),
          callback = $(this).data('ajax-callback');

      ajaxLoad( content, container, transition, function(){
        window[eval( callback )];
      } );
    });
  }() );

  //
}() );
