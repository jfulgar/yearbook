$(document).ready(function(e){
	//enable scrolling in nav
	$("#nav_main").on('touchstart',function(e){
		e.stopPropagation();
	});
	$("#nav_main").on('touchmove',function(e){
		e.stopPropagation();
	});
	$(".biography").on('touchstart',function(e){
		e.stopPropagation();
	});
	$(".biography").on('touchmove',function(e){
		e.stopPropagation();
	});
	$(document).on('touchmove',function(e) {
		e.preventDefault();
	});
	
	//position and size adjust
	$("aside, nav").fullHeight();
	$("#nav_main").customFullHeight();
	$(".nav_top_item").widthAdjust();
	window.onresize = function(){
		$("aside, nav").fullHeight();
		$("#nav_main").customFullHeight();
		$(".nav_top_item").widthAdjust();
	}
	
	//reveal nav method
	var isNavActive = false;
	function revealNav() {
		$('section').toggleClass('AO-revealNav');
		if(!isNavActive){
			
			isNavActive = true;
		} else {
			
			isNavActive = false;
		}
	}
	function closeNav(){
		if(isNavActive) {
			$('section').toggleClass('AO_revealNav');
		}
	}
	$("aside ul li").on('tap',function(e){
		revealNav();
		e.stopPropagation();
	});
	$("body").on('tap',closeNav);
	
	//nav_top animation
	$('#nav_top li').on('tap', function(){
		$('#nav_top li').coverNavTop();
		$(this).css({'width':'42.855%'});
	});
	
	//nav_top sorting
	$("#nav_top li").on('tap',function(){
		if($(this).attr('id') == 'allBtn')  {
			$("#nav_main li").css({'display':'block'});
		} else if($(this).attr('id') == 'designBtn') {
			$("#nav_main li").css({'display':'none'});
			$(".designStudent").css({'display':'block'});
		} else if($(this).attr('id') == 'developBtn') {
			$("#nav_main li").css({'display':'none'});
			$(".developStudent").css({'display':'block'});
		} else if($(this).attr('id') == 'videoBtn') {
			$("#nav_main li").css({'display':'none'});
			$(".videoStudent").css({'display':'block'});
		} else if($(this).attr('id') == 'hybridBtn') {
			$("#nav_main li").css({'display':'none'});
			$(".hybridStudent").css({'display':'block'});
		}
	});
	
	
	//init
	$('#allBtn').trigger('tap');
});