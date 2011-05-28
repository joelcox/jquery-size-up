/**
 * Makes your headings fit its container perfectly.
 * @author Joël Cox
 */
(function($) {
	
	$.fn.sizeUp = function(options) {
		
		var defaults = {  
			marginCorrection: 0,  
		};  
		var options = $.extend(defaults, options);
		
		return this.each(function() {
    
		// Wrapper the text in spans to we can check for the width
			$(this).wrapInner('<span />');
		
			var fontSize = parseInt($(this).css("font-size")),
				currentElementWidth = $('span', this).width(),
				previousElementWidth = 0,
				elementWidthIncrease = 0,
				maxElementWidth = $(this).parent().width();
			
			while(currentElementWidth + elementWidthIncrease - options.marginCorrection < maxElementWidth){
			
				$(this).css("font-size", fontSize);
				previousElementWidth = currentElementWidth;
				currentElementWidth = $('span', this).width();
				elementWidthIncrease = currentElementWidth - previousElementWidth;
				fontSize++;	
						
			}
			
		});
		
	};
	
})(jQuery);