$(function () {
  callPage("pages/home.html", "", "home");
  document.getElementById('copyrightYear').innerHTML = 'Copyright &copy; ' + new Date().getFullYear();
});

$('ul.navbar-nav li.dropdown').hover(function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$(".navi").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  let url, divStop, idStop = "";
  window.scrollTo(0, 0);
  url = $(this).attr('href');
  idStop = url.substring((url.indexOf('/') + 1), url.indexOf('.'));
  let divStopIndex = url.indexOf('#');
  divStop = (divStopIndex !== -1) ? url.substring(divStopIndex, url.length) : "";
  console.log(divStop);
  callPage(url, divStop, idStop);
});

function callPage(pageRef, specific, id) {
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
      $('.nav-item').removeClass('active');
      $('#' + id).closest('.nav-item').addClass('active');
      if (specific !== undefined && specific.length > 0) {
        $('html, #main').animate({
          scrollTop: $(''+specific).offset().top}, 1000);
      };
    }
  });
}