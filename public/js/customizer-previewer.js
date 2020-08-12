// JavaScript Document
/***********************
document.domain = window.Configs.reactUrl.replace('http://','');

jQuery('#customize-preview').remove();
var iframe = document.createElement('iframe');
iframe.id = "previewer";
iframe.src = window.Configs.reactUrl;just

jQuery(iframe).appendTo( ".wp-full-overlay" );
jQuery('#previewer').wrap('<div id="customize-preview" class="wp-full-overlay-main"></div>');

jQuery(function($){
 
    $('body').on('click', '#customize-save-button-wrapper', function(){
		setTimeout( function() {
			var url = previewer.contentWindow.location['href'];
			$('#customize-preview').remove();
			var iframe = document.createElement('iframe');
			iframe.id = "previewer";
			iframe.src = url;
			
			$(iframe).appendTo( ".wp-full-overlay" );
			$('#previewer').wrap('<div id="customize-preview" class="wp-full-overlay-main"></div>');
		},1000);
    })
});

