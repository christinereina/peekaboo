$(document).ready(function() {
  $("button#modechange1").click(function() {
    $("body").removeClass();
    $("body").addClass("darkmode");
  });

  $("button#modechange2").click(function() {
    $("body").removeClass();
    $("body").addClass("lightmode");
  });
});


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

$(document).ready(function() {
  $(".clickable2").click(function() {
    $(".toggle").fadeToggle();
  });
});

