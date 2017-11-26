
$(document).ready(function () {
  
  //  PARTIALS  //
  //=require ./partials/inicio.js 
  
  // $.ajaxSetup({
  //   headers:
  //   { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
  // });

  //  SMOOTH SCROLL
    var offset = $('#navnav').outerHeight();
    var query = "[data-scroll]";
    $(document).on('click', query, function (event) {
      var hash = this.hash;
      if ( hash != '' ){
        event.preventDefault();
        var $target = $( $(this).attr('href') );
        if ($target.length) {
          $('html, body').animate({
            scrollTop: $target.offset().top - offset
          }, 500, 'easeInOutQuad', function(){
            if(history.pushState)
            history.pushState(null, null, hash);
            else
            location.hash = hash;
          });
        }
      }
    });
  //  SMOOTH SCROLL
 

  //  SCROLL SPY
    $('body').scrollspy({ target: '#navbar-collapse', offset: 55 });
  //  SCROLL SPY


  //  NAV ANIMATION
    $navbar = $('#navnav');
    afix();
    $(window).scroll(function() {
      afix();
    });
    function afix(){
      if ( $(this).scrollTop() > 60 )
        $navbar.addClass("afix");
      else
        $navbar.removeClass("afix");
    }
  //  NAV ANIMATION
});