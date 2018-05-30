$(function () {
  callPage("pages/home.html");
});

$('ul.navbar-nav li.dropdown').hover(function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$("a").on("click", function (e) {
  e.preventDefault();
  var url = $(this).attr('href');
  var divStopIndex = url.indexOf('#');
  var divStop = (divStopIndex !== -1) ? url.substring(divStopIndex, url.length) : "";
  console.log(divStop);
  callPage(url, divStop);
});

function callPage(pageRef, specific) {
  $.ajax({
    url: pageRef,
    type: "GET",
    dataType: "text",
    success: function (response) {
      console.log('the page was loaded', response);
      $('#main').html(response);
      if (specific !== "") {
        $('html, #main').animate({
          scrollTop: $(specific).offset().top
        }, 2000);
      }
    },
    error: function (error) {
      console.log(error);
    },
    complete: function (xhr, status) {
      console.log("The request is complete!");
    }
  });
}