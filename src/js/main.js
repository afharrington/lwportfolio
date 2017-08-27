import '../stylesheets/main.scss';

// Portfolio filter buttons fixed to top after scrolling past it only
var initialPosition = $('.sticky-filter-container').offset().top;
$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= initialPosition) {
    $('.sticky-filter-container').css({ position: 'fixed', top: '0' });
    } else {
      $('.sticky-filter-container').css({ position: 'static', top: '0' });
    }
    return false;
});

// Filtering with buttons
var $filters = $('.filter').click(function() {
    $('#portfolio-projects > div').hide();
  if (this.id == 'all') {
    $('#portfolio-projects > div').fadeIn(450);
  } else {
    var $project = $('.' + this.id).fadeIn(450);
    $('#portfolio-projects > div').not($project).hide();
  }
  $filters.removeClass('active');
  $(this).addClass('active');
})
