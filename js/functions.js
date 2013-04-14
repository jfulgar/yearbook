//=============Copyright - Minh Dat Hoang - 2013===============
//function list:
//===validateCheckbox(class) -> check if the checkboxes has been at least 1 checked, have to give them the same class name
//===nl2br(text) -> \r \n \r\n -> <br />

function validateCheckbox(classKeo) {
	var anychecked = false;
	$("."+classKeo).each(function(){
		if($(this).is(':checked')) {
			anychecked = true;
		}
	});
	if(anychecked) {
		return true;
	} else {
		return false;
	}
}

function nl2br(text) {
        var newText = text.replace('\r\n','<br />',"g");
        newText = newText.replace('\r','<br />',"g");
        newText = newText.replace('\n','<br />',"g");
        return newText;
}

(function( $ ) {
  $.fn.fullHeight = function() {
  
    this.css({'height': $(window).height() + 'px'});


  };
})( jQuery );

(function( $ ) {
  $.fn.customFullHeight = function() {
  	var navContainerPaddingTop = 50;
	var navContainerPaddingBottom = 25;
	var navTopMarginBottom = 25;
	var navMainBlackLine = 25;
    this.css({'height': $("nav").height() - navContainerPaddingTop - navContainerPaddingBottom - navTopMarginBottom - (navMainBlackLine*2) - $("#nav_top").height() + 'px'});
  };
})( jQuery );

(function( $ ) {
  $.fn.coverNavTop = function() {
  	this.css({"width":"14.285%"});


  };
})( jQuery );

(function( $ ) {
  $.fn.widthAdjust = function() {
  	
	this.css({'width': $("#nav_top li").width() * 3 + 'px'});


  };
})( jQuery );