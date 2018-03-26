$(document).ready(function() {
  $("#divAddClass").click(function() {
    $("#pAddClass").addClass("negative");
  });

  $("#divAnimate").click(function() {
    $("#pAnimate")
      .animate({ bottom: "+=10" }, 250)
      .animate({ right: "+=24" }, 250)
      .animate({ right: "-=48" }, 250)
      .animate({ right: "+=24" }, 250)
      .animate({ bottom: "-=10" }, 250);
  });

  $("#divAppend").click(function() {
    $("#spanAppend").append(" <t>.</t>");
  });

  $("#divDblClick").dblclick(function() {
    // lightblue === rgb(173, 216, 230)
    // grey === rgb(128, 128, 128)
    if ($("body").css("background-color") === "rgb(173, 216, 230)") {
      $("body").css("background-color", "grey");
    } else if ($("body").css("background-color") === "rgb(128, 128, 128)") {
      $("body").css("background-color", "lightblue");
    }
  });

  $("#divHover").hover(
    function() {
      switch ($("body").css("background-color")) {
        case "rgb(173, 216, 230)":
          $("body").css("background-color", "grey");
          break;
        case "rgb(128, 128, 128)":
          $("body").css("background-color", "lightblue");
          break;
      }
    },
    function() {
      switch ($("body").css("background-color")) {
        case "rgb(173, 216, 230)":
          $("body").css("background-color", "grey");
          break;
        case "rgb(128, 128, 128)":
          $("body").css("background-color", "lightblue");
          break;
      }
    }
  );

  $("#divToggle").click(function() {
    $("#pToggle").toggle();
  });
});

$("#divDelay").click(function() {
  $("#pDelay")
    .delay(25)
    .fadeOut();
  $("#pDelay")
    .delay(25)
    .fadeIn();
  $("#pDelay")
    .delay(25)
    .fadeOut();
  $("#pDelay")
    .delay(25)
    .fadeIn();
  $("#pDelay")
    .delay(2000)
    .fadeOut();
  $("#pDelay")
    .delay(25)
    .fadeIn();
});
