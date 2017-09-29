$(document).ready(function() {

	$(".expand-collapse").click(function(){

		var sisTekstas = $(this).prev(".cv-text");

		if(sisTekstas.hasClass("toggleable")) {
			sisTekstas.toggleClass("text-collapse");
			sisTekstas.parent(".collapsable:after").css("content", "");
		}
		else if($(this).hasClass("language-collapse")) {
			$(".language-row").slideToggle("fast");
		}
		else {
			$(".language-row").find("img").toggle();
			$(this).find("img").toggle();
			sisTekstas.slideToggle("fast");
		}
	});

	$(".menu-icon").click(function(){
		$(".more-cvs-expanded").slideDown("fast");
		$("nav").hide();
		$("section").hide();
		$("footer").hide();
	})

	$(".close").click(function(){
		$(".more-cvs-expanded").slideUp("fast");
		$("nav").show();
		$("section").show();
		$("footer").show();
	})

	function hover(section, color) {
		$("#more-cvs ." + section).hover(function() {
		$(this).find("h3").css({"background": "white", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"});
	}, function() {
		$(this).find("h3").css({"background": color, "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"});
	})
	}

	hover("cv-1", "linear-gradient(to right, rgba(189, 237, 255, 1), rgba(82, 209, 255, 1))");
	hover("cv-2", "linear-gradient(to right, rgba(169, 172, 229, 1), rgba(129, 134, 217, 1))");
	hover("cv-3", "linear-gradient(to right, rgba(98, 253, 335, 1), rgba(8, 253, 224, 1))");
	hover("cv-4", "linear-gradient(to right, rgba(251, 208, 188, 1), rgba(245, 133, 81, 1))");
	
})