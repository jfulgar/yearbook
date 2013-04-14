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
	$("#nav_top, #nav_top li, .nav_top_item, .nav_top_icon").css({"height": $("#nav_top").width() * 14.285/100 + "px"});
	window.onresize = function(){
		$("aside, nav").fullHeight();
		$("#nav_main").customFullHeight();
		$(".nav_top_item").widthAdjust();
		$("#nav_top, #nav_top li, .nav_top_item, .nav_top_icon").css({"height": $("#nav_top").width() * 14.285/100 + "px"});
	}
	
	//reveal nav method
	var isNavActive = false;
	function revealNav() {
		if(!isNavActive){
			$('section').css({"margin-left":"40.7%"});
			isNavActive = true;
		} else {
			$('section').css({"margin-left":"5.37%"});
			isNavActive = false;
		}
	}
	function closeNav(){
		if(isNavActive) {
			$('section').css({"margin-left":"5.37%"});
		}
	}
	$("aside ul li#studentBtn").on('tap',function(e){
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