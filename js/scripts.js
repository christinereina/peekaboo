$(document).ready(function() {
  $(".clickable0").click(function() {
    $(".element-showing0").toggle();
    $(".element-hidden0").toggle();
  });
});

$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".element-showing1").fadeToggle();
    $(".element-hidden1").fadeToggle();
  });
});
