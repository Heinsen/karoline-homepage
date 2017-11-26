$(".navbar-item").on('click', function(e){
   e.preventDefault();
   $(this).addClass('navbar-item-active')
});


$(document).ready(function() {
	// get current URL path and assign 'active' class
	//var pathname = window.location.pathname;
	//$('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');
})