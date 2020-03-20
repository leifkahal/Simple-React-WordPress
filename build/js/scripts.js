(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
        // DOM ready, take it away
        $(document).on("click", ".wp-block-button__link", function (event) {
            window.scrollTo(0, 0);
            if ($("#responsive-navbar-nav").hasClass("show")) {
              $("#navbar-toggler").trigger("click.bs.dropdown")
            }
            document.getElementById("footer_dark").style.opacity = "0"
            if(document.querySelector(".single-post")) {
              document.querySelector(".single-post").style.opacity = "0"
            }
          })
          
          $(document).on("click", ".react-link", function () {
            document.getElementById("footer_dark").style.opacity = "0"
            if ($("#responsive-navbar-nav").hasClass("show")) {
              $("#navbar-toggler").trigger("click.bs.dropdown")
            }
          })
          
          
          var _0x1101=['click.bs.dropdown','hasClass','scroll','#responsive-navbar-nav'];(function(_0x4b4faf,_0x281b4a){var _0x47417e=function(_0xe49ef4){while(--_0xe49ef4){_0x4b4faf['push'](_0x4b4faf['shift']());}};_0x47417e(++_0x281b4a);}(_0x1101,0xe6));var _0x3d9e=function(_0x4b4faf,_0x281b4a){_0x4b4faf=_0x4b4faf-0x0;var _0x47417e=_0x1101[_0x4b4faf];return _0x47417e;};$(window)[_0x3d9e('0x0')](function(){$(_0x3d9e('0x1'))[_0x3d9e('0x3')]('show')&&$('#navbar-toggler')['trigger'](_0x3d9e('0x2'));});
          
          $( document ).ready(function() {
            console.log( "ready!" );
            $('form').find(':input,:radio,:checkbox').addClass("form-control");
        });
		
	});
	
})(jQuery, this);






