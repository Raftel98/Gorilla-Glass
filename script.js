let black = ['http://enwaara.se/codepen/watch-black-front.png', 'http://enwaara.se/codepen/watch-black.png'];
let white = ['http://enwaara.se/codepen/watch-white-front.png', 'http://enwaara.se/codepen/watch-white.png'];
let grey = ['http://enwaara.se/codepen/watch-grey-front.png', 'http://enwaara.se/codepen/watch-grey.png'];
let yellow = ['http://enwaara.se/codepen/watch-yellow-front.png', 'http://enwaara.se/codepen/watch-yellow.png'];

$('.customize-btn').click(function(){
	$('.start-content')
});

$('.customize-btn').click(function () {
	
	let bgImage = 'http://enwaara.se/codepen/watches.png';
	if($('.activecolor').hasClass('black')) {
		bgImage = black[0];
	} else if($('.activecolor').hasClass('white')) {
		bgImage = white[0];
	} else if($('.activecolor').hasClass('grey')) {
		bgImage = grey[0];
	} else if($('.activecolor').hasClass('yellow')) {
		bgImage = yellow[0];
	}
	
	$('.start-content').animate({'margin-left':'-100%', 'opacity':'0'}, 200);
	$('.customize-content').animate({'margin-right':'0', 'opacity':'1'}, 200);
	$('.product-image').animate({'margin-left':'-100%', 'opacity':'0'}, 200);
	$('.custom-product-image').animate({'margin-right':'0', 'opacity':'1'}, 200);
	$('.custom-product-image').css('background-image', 'url("' + bgImage + '")');
	$('.back').show();
});

$('.back').click(function(){
	$('.customize-content').animate({'margin-right':'-100%', 'opacity':'0'}, 200);
	$('.start-content').animate({'margin-left':'0', 'opacity':'1'}, 200);
	$('.custom-product-image').animate({'margin-right':'-100%', 'opacity':'0'}, 200);
	$('.product-image').animate({'margin-left':'0', 'opacity':'1'}, 200);
	$('.back').hide();
});
$('.buy').click(function(){
	$('.customize-content').animate({'margin-right':'-100%', 'opacity':'0'}, 200);
	$('.start-content').animate({'margin-left':'0', 'opacity':'1'}, 200);
	$('.custom-product-image').animate({'margin-right':'-100%', 'opacity':'0'}, 200);
	$('.product-image').animate({'margin-left':'0', 'opacity':'1'}, 200);
	$('.back').hide();
});

$('.color').click(function(){
	$(this).toggleClass('activecolor');
	
	if($('.color').not(this).hasClass('activecolor')) {
		$('.color').not(this).removeClass('activecolor')
	}
	
	let bgImage = '';
	if($(this).hasClass('black')) {
		bgImage = black[0];
	} else if($(this).hasClass('white')) {
		bgImage = white[0];
	} else if($(this).hasClass('grey')) {
		bgImage = grey[0];
	} else if($(this).hasClass('yellow')) {
		bgImage = yellow[0];
	}
	$('.custom-product-image').css('background-image', 'url("' + bgImage + '")');
	
});

$('.size').click(function(){
	$(this).toggleClass('active');
	
	if($('.size').not(this).hasClass('active')) {
		$('.size').not(this).removeClass('active')
	}
});

$( ".custom-product-image" ).mouseenter(function() {
	
	let bgImage = '';
	if($('.activecolor').hasClass('black')) {
		bgImage = black[1];
	} else if($('.activecolor').hasClass('white')) {
		bgImage = white[1];
	} else if($('.activecolor').hasClass('grey')) {
		bgImage = grey[1];
	} else if($('.activecolor').hasClass('yellow')) {
		bgImage = yellow[1];
	}
	$('.custom-product-image').css('background-image', 'url("' + bgImage + '")');
	
});

$( ".custom-product-image" ).mouseout(function() {
	
	let bgImage = '';
	if($('.activecolor').hasClass('black')) {
		bgImage = black[0];
	} else if($('.activecolor').hasClass('white')) {
		bgImage = white[0];
	} else if($('.activecolor').hasClass('grey')) {
		bgImage = grey[0];
	} else if($('.activecolor').hasClass('yellow')) {
		bgImage = yellow[0];
	}
	$('.custom-product-image').css('background-image', 'url("' + bgImage + '")');
	
});