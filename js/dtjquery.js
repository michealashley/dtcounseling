$('ul.navbar-nav li.dropdown').hover(function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$("a").on("click", function (e) {
  e.preventDefault();
  var url = $(this).attr('href');
  callPage(url);
});

function callPage(pageRef) {
  $.ajax({
    url: pageRef,
    type: "GET",
    dataType: "text",
    success: function (response) {
      console.log('the page was loaded', response);
      $('#main').html(response);
    },
    error: function (error) {
      console.log(error);
    },
    complete: function (xhr, status) {
      console.log("The request is complete!");
    }
  });
}