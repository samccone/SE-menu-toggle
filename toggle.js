$(function() {
  $('.section_contents').hide();
  $('a.active', '#nav').parents('.section_contents').show();
  $($('a.active', '#nav').parents('.section').find('.section_name')).addClass('open');
  $('.section_name').click(toggleSection)
                    .css('cursor', 'pointer');

  function toggleSection(e) {
    _t = $(e.target);
    if (!_t.siblings('.section_contents').is(':animated')) {
      _t.siblings('.section_contents').toggle('blind');
      _t.toggleClass('open');
    }
  }
});