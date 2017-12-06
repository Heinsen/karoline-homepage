$(".nav-item").on("click", function(){
   $(".active").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});


$(document).ready(function() {
  $('a.active').removeClass('active');
  $('a[href="' + location.pathname + '"]').closest('a').addClass('active'); 
});