$(document).ready(function() {
  $(".btn-spain").click(function() {
    $(".show").slideToggle();
    //$(".show").slideUp();

  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

});
