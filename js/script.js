$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 50) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  $(".navbar .nav-menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $(".navbar .nav-menu").toggleClass("active");
    // $(".nav-menu img").toggleClass("active");
  });
});
