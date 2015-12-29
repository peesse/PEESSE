// MAIN.JS
// BY PEESSE 

$(function(){

	var navA=$("nav a")
	var lastScrollTop = 200;
	
	$('#bttop a').click(function(oEvt){
		oEvt.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})

	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		if (st > lastScrollTop){
			$(".headerstandard").stop().animate({ height: 120 }, "slow");
			$(".headerstandard h1, .headerstandard nav a").stop().animate({ 'line-height': 120 }, "slow");
		} else if(st==0) {
			$(".headerstandard").stop().animate({ height: 230 }, "slow");
			$(".headerstandard h1, .headerstandard nav a").stop().animate({ 'line-height': 230 }, "slow");
		}
		lastScrollTop = st;
	});

	navA.click(function(oEvt){
		
		navA.each(function(){
			if($(this).hasClass("active")){
				$(this).removeClass("active");
			}
		})
		$(this).addClass("active");
		$('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	})
	$('#page section h3').appear();
	$(document.body).on('appear', '#page section', function(oEvt) {
		var id = $(this).attr('id')
		navA.each(function(){
			if($(this).attr('data-ancre')==id){
				$(this).addClass("active");
			}else{
				$(this).removeClass("active");
			}
		})
	})

	$('#burger').click(function(oEvt){
   
		if($('#mobilenav').hasClass("open")) {
			closeSidepage();
		} else {
			$('#mobilenav').addClass("open");
			openSidepage();
		}
		
	})

	$('#mobilenav a').click(function(oEvt){
		if($('#mobilenav').hasClass("open")) {
			closeSidepage();
		} 
		
	})

	function openSidepage() {
		$('#mobilenav').slideDown("fast"); 
	}

	function closeSidepage(){
		$("#mobilenav").removeClass("open");
		$('#mobilenav').slideUp("fast"); 
	}
});