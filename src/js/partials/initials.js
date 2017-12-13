
// $.ajaxSetup({
//   headers:
//   { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
// });


// LOADERS
$('body').addClass('ready');
$('.loader-overlay').fadeOut('slow');
$('.loader-container').fadeOut('slow');


//  SCROLL SPY
  $('body').scrollspy({ target: '#navbar-collapse', offset: 55 });
//  SCROLL SPY


//  SMOOTH SCROLL
  navbarOffset = $('#navnav').outerHeight();
  var query = "a[smooth-scroll]";
  $(document).on('click', query, function (event) {
    var hash = this.hash;
    if ( hash != '' ){
      event.preventDefault();
      var $target = $( $(this).attr('href') );
      if ($target.length) {
        $('html, body').animate({
          scrollTop: $target.offset().top - navbarOffset
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