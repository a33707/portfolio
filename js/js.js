$(document).ready(function(){ 

// 메인화면 글씨 가운데 정렬
    $('.hello').css('height', $(window).height()); 
    $(window).resize(function() { 
        $('.hello').css('height', $(window).height()); 
    });

// 메뉴 클릭시 등장
	$('.menu-btn').click(function(){
		$('.menu-wrap').addClass('show');
		$('aside').css('background-color','rgba(0,0,0,0.8)');
		$('.menu').css('z-index','1');
		$('.menu-btn').css('display','none');
		$('.close').css('display','inline-block');
	});
	$('.close').click(function(){
		$('.menu-wrap').removeClass('show');
		$('aside').css('background-color','rgba(0,0,0,0)');
		$('.menu').css('z-index','-1');
		$('.menu-btn').css('display','inline-block');
		$('.close').css('display','none');
	});

// 메뉴 가운데 정렬
    $('.menu-wrap').css('top', (($(window).height() - $('.menu-wrap').height()) / 2));
	$('.menu-wrap').css('left', (($(window).width() - $('.menu-wrap').width()) / 2));
    $(window).resize(function() { 
        $('.menu-wrap').css('top', (($(window).height() - $('.menu-wrap').height()) / 2));
        $('.menu-wrap').css('left', (($(window).width() - $('.menu-wrap').width()) / 2));
    });

// 포트폴리오 스크린샷(pfss) 슬라이드로 등장 
	(function($) {

	  /**
	   * Copyright 2012, Digital Fusion
	   * Licensed under the MIT license.
	   * http://teamdf.com/jquery-plugins/license/
	   *
	   * @author Sam Sehnert
	   * @desc A small plugin that checks whether elements are within
	   *     the user visible viewport of a web browser.
	   *     only accounts for vertical position, not horizontal.
	   */

	  $.fn.visible = function(partial) {
	    
	      var $t            = $(this),
	          $w            = $(window),
	          viewTop       = $w.scrollTop(),
	          viewBottom    = viewTop + $w.height(),
	          _top          = $t.offset().top,
	          _bottom       = _top + $t.height(),
	          compareTop    = partial === true ? _bottom : _top,
	          compareBottom = partial === true ? _top : _bottom;
	    
	    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	  };
	    
	})(jQuery);

	var win = $(window);

	var allpfss = $('.pfss');

	allpfss.each(function(i, el) {
	  var el = $(el);
	  if (el.visible(true)) {
	    el.addClass('already-visible'); 
	  } 
	});

	win.scroll(function(event) {
	  allpfss.each(function(i, el) {
	    var el = $(el);
	    if (el.visible(true)) {
	      el.addClass('come-in'); 
	    } 
	  });
	});

	// 이미지팝업
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
});