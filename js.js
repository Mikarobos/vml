$(document).ready(function() {
  $('.roadmap-card-text').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});
