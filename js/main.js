$(function () {	
	$(".backpanel").mCustomScrollbar({		
		theme: "minimal",	
		alwaysShowScrollbar: 0,
	});	
	
	$('.backpanel').show();
	
	function close() {		
		$('.backpanel').removeClass('active');	
		$('.floatmenu li').removeClass('active');		
		$('.backpanel').css({
			'z-index': '5',
			'margin-left': '-25%',			
			'right': 'auto'
		})
	}
	
	function togglePanel(panel, link) {
		if ($(panel).hasClass('active')) {			
			$('.main_profile').css({
				'left': '50%',
				'margin-left': '-25%'
			});
			$('.floatmenu').css({
				'left': 'calc(25% - 108px)',
			});	
			$('.backpanel').css({
				'margin-left': '-25%',		
				'left': '50%',
				'right': 'auto'
			});					
			$(panel).on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e){
				$(panel).removeClass('active');
				$(link).removeClass('active');
				$(this).off(e);
			});
		} else {			
			close();			
			$(panel).addClass('active');
			$(link).addClass('active');
			$('.main_profile, .backpanel').css({
				'left': '20px',
				'margin-left': '108px'
			});
			$('.floatmenu').css({
				'left': '20px',
			});
			$(panel).css({
				'margin-left': '0',	
				//'left': '50%',
				'left': 'calc(108px + 630px)',
				'z-index': '6' 
			});					
		}		
	}
	
	$('.link_about').click(function(){			
		togglePanel('.panel_about', '.link_about');		
	});	
	
	$('.link_resume').click(function(){			
		togglePanel('.panel_resume', '.link_resume');		
	});	
	
	$('.link_portfolio').click(function(){		
		togglePanel('.panel_portfolio', '.link_portfolio');		
	});		
});