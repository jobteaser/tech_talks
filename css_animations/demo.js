$.fn.redraw = function(){
  $(this).each(function(){
    var redraw = this.offsetHeight;
  });
};


var chainTransitions = function($el){

  $el.addClass('fade-out');
  setTimeout(function(){
    $el.removeClass('fade-out').addClass('fade-in-prepare');
    $el.find('.content').html('ON');
    $el.redraw();
    $el.addClass('fade-in');
  }, 500);

}


Reveal.addEventListener('ready', function(event) {
  $('#demo6').removeClass('inactive');

  $('#demo8').on('click', '.box', function(){

    if($(this).hasClass('fade-in')){
      $(this).removeClass('fade-in-prepare').removeClass('fade-in');
      $(this).find('.content').html('OFF');
    }
    else{
      chainTransitions($(this));
    }
  });

})


