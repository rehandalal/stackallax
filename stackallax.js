(function($) {
  $.fn.stackallax = function() {
    var stack = $(this);
    var targets;

    function getTargets(elems) {
      var target;
      var offset;

      $(elems).each(function() {
        var delta = $(this).offset().top + $(this).outerHeight() - $(document).scrollTop();
        if ((typeof offset === 'undefined') && (delta > 0)) offset = delta;
        if ((delta >= 0) && (delta <= offset)) {
          offset = delta;
          target = $(this);
        }
      });
      return [target, target.next()];
    }

    $(document).on('scroll', function() {
      var marginTop = 0;
      stack.css({
        'position': '',
        'marginTop': '',
        'top': ''
      });
      targets = getTargets(stack);
      if (targets[1]) {
        targets[1].css('marginTop', targets[0].outerHeight());
      }
      targets[0].css({
        'position': 'fixed',
        'top': 0
      });
    });
  }
})(jQuery);
