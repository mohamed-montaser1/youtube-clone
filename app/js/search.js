$(function () {
  $("#search-fliters-icon").click(function () {
    $(".filter-column").slideToggle("slow");
  });

  $("input:checkbox").click(function () {
    let $box = $(this);

    if ($box.is(":checked")) {
      let group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $($box).prop("checked", true);
    }
  });
});
