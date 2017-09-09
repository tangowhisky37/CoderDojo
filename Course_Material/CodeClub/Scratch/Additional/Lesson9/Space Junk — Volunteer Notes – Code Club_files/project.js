$(function () {
  // render scratchblocks
  scratchblocks2.load_language(scratchblocks2._translations['fr']);
  scratchblocks2.load_language(scratchblocks2._translations['de']);
  scratchblocks2.load_language(scratchblocks2._translations['es']);
  scratchblocks2.parse('pre.blocks code, pre.scratch code');

  // make checkboxes clickable
  $('.lesson-steps > li').on('click', function () {
    $(this).toggleClass('activity-done');
    window.ga('send', 'event', 'Lesson Step Checkbox', 'clicked');
  });
});
