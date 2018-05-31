$(function () {
  callPage("pages/home.html");
  document.getElementById('copyrightYear').innerHTML = 'Copyright &copy; ' + new Date().getFullYear();
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
      //console.log('the page was loaded', response);
      $('#main').html(response);
      if (specific !== "") {
        console.log(specific);
        $('html, #main').animate({
          scrollTop: $(specific).offset().top - $('.header').height()
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