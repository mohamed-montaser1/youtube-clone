$(function () {
  $(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });

  $(".toggler").click(function (e) {
    $("#wrap").toggleClass("toggled");
    var right = $(".side-bar").css("right");

    if (right == "0px") {
      $(".side-bar").css({
        right: "-20rem",
      });
      $(".layer").fadeOut();
    } else {
      $(".side-bar").css({
        right: "0rem",
      });
      $(".layer").fadeIn();
    }
  });

  $(".layer").click(function (e) {
    $(".side-bar").css({ right: "-20rem" });
    $(this).fadeOut();
  });

  $(".search-icon").click(function () {
    $(".search-input").slideToggle("slow");
  });
  $("#theMainSearch").keyup((e) => {
    if (e.key == "Enter") {
      if ($("#theMainSearch").value != "") {
        location.href = "search.html";
      }
    } else {
      return false;
    }
  });
});
