(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away
		$(".page_item").addClass("nav-item");
        $(".page_item a").addClass("nav-link");
        $(".menu ul").addClass("nav navbar-nav ml-auto"); 
        $(".navbar .menu-item").addClass("nav-item");
        $(".navbar .menu-item a").addClass("nav-link");
        $(".navbar ul").addClass("nav navbar-nav ml-auto");
        $(".navbar .menu-item").addClass("visible");
		
	});
	
})(jQuery, this);



