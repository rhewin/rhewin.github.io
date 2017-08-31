$(function () {	
	function close() {		
		$('.backpanel').removeClass('active');	
		$('.floatmenu li').removeClass('active');		
		$('.backpanel').css({
			'z-index': '5',
			'margin-left': '-25%',			
			'right': 'auto'
		})
	}
		
	$(".backpanel").mCustomScrollbar({		
		theme: "minimal-dark",	
		alwaysShowScrollbar: true,
	});	
	
	$('.link_about').click(function(){			
		if ($('.panel_about').hasClass('active')) {			
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
			$('.panel_about').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e){
				$('.panel_about').removeClass('active');
				$('.link_about').removeClass('active');
				$(this).off(e);
			});
		} else {			
			close();			
			$('.panel_about').addClass('active');
			$('.link_about').addClass('active');
			$('.main_profile, .backpanel').css({
				'left': '0',
				'margin-left': '108px'
			});
			$('.floatmenu').css({
				'left': '0',
			});
			$('.panel_about').css({
				'margin-left': '52px',	
				'left': '50%',
				'z-index': '6' 
			});					
		}		
	});	
	
	$('.link_resume').click(function(){			
		if ($('.panel_resume').hasClass('active')) {			
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
			$('.panel_resume').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e){
				$('.panel_resume').removeClass('active');
				$('.link_resume').removeClass('active');
				$(this).off(e);
			});
		} else {
			close();				
			$('.panel_resume').addClass('active');
			$('.link_resume').addClass('active');			
			$('.main_profile, .backpanel').css({
				'left': '0',
				'margin-left': '108px'
			});
			$('.floatmenu').css({
				'left': '0',
			});
			$('.panel_resume').css({
				'margin-left': '52px',	
				'left': '50%',				
				'z-index': '6'
			});		
		}		
	});	
	$('.link_portfolio').click(function(){			
		if ($('.panel_portfolio').hasClass('active')) {			
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
			$('.panel_portfolio').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e){
				$('.panel_portfolio').removeClass('active');
				$('.link_portfolio').removeClass('active');
				$(this).off(e);
			});
		} else {
			close();				
			$('.panel_portfolio').addClass('active');
			$('.link_portfolio').addClass('active');			
			$('.main_profile, .backpanel').css({
				'left': '0',
				'margin-left': '108px'
			});
			$('.floatmenu').css({
				'left': '0',
			});
			$('.panel_portfolio').css({
				'margin-left': '52px',			
				'left': '50%',				
				'z-index': '6'
			});		
		}		
	});		
});