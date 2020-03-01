$( document ).ready(function() {
    console.log( "ready!" );
	$('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	});
	
	$('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
			$("body").removeClass('bg-white').addClass('bg-secondary');
			$(".target").removeClass('bg-light').addClass('bg-dark');
			$(".target").removeClass('text-muted').addClass('text-light');
		} else {
			$("body").removeClass('bg-secondary').addClass('bg-white');
			$(".target").removeClass('bg-dark').addClass('bg-light');
			$(".target").removeClass('text-light').addClass('text-muted');
		}
	});
	
	$("#openCloseNav").one("click", openNav);
	
	$("#navbarSupportedContent a").on('click', function(event) {
		if (this.hash !== "") {

		event.preventDefault();

		var hash = this.hash;

		$('html, body').animate({
		  scrollTop: $(hash).offset().top - 170
		}, 800);

	  } 

	});
});

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("openCloseNav").style.right  = "250px";
  $("#openCloseNav i").removeClass('fa-hand-o-left').addClass('fa-hand-o-right');
  $(this).one("click", closeNav);
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("openCloseNav").style.right = "15px";
  $("#openCloseNav i").removeClass('fa-hand-o-right').addClass('fa-hand-o-left');
  $(this).one("click", openNav);
}