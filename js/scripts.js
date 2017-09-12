$(document).ready(function() {

  $("button#dog").click(function() {
    $("ul#left").prepend("<li>Bark!</li>");
    $("ul#right").prepend("<li>Meow!</li>");
    $("ul#left").prepend("<img src=img/dog.jpg width=200>");
  $("img").click(function() {
    $(this).remove();
});
    });

  $("button#cat").click(function() {
    $("ul#left").prepend("<li>growl</li>");
    $("ul#right").prepend("<li>purr</li>");
    $("ul#right").prepend("<img src=img/cat.jpg width=200>");
    $("img").click(function() {
      $(this).remove();
  });
  });
});
