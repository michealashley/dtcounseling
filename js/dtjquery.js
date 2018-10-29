$(function () {
  callPage("pages/home.html");
  document.getElementById('copyrightYear').innerHTML = 'Copyright &copy; ' + new Date().getFullYear();
});

$('ul.navbar-nav li.dropdown').hover(function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$('ul.navbar-nav .nav-item a').on('click', function() {
  $('.nav-item').removeClass('active');
  $(this).closest('.nav-item').addClass('active');
})

$("a").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  let url, divStop = "";
  url = $(this).attr('href');
  let divStopIndex = url.indexOf('#');
  divStop = (divStopIndex !== -1) ? url.substring(divStopIndex, url.length) : "";
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
    },
    error: function (error) {
      console.log(error);
    },
    complete: function (xhr, status) {
      console.log("The request is complete!");
      if (specific !== "") {
        $('html, #main').animate({
          scrollTop: $(''+specific).offset().top - $('.header').height()
        }, 2000);
      };
    }
  });
}