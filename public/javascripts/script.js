$(".nav-item").on("click", function(){
   $(".active").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});


$(document).ready(function() {
  $('a.active').removeClass('active');
  $('a[id="' + location.pathname + '"]').closest('a').addClass('active'); 
});