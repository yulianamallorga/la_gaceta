$('.news').on('click', function(){
	$('.news').removeClass('selected');
	$(this).addClass('selected');
	$('.modal').removeClass('hide');
});

$('.back-to-top').on('click', function(){
	$('body').scrollTop(0);
});

$('button.close').on('click', function(){
	$('.modal').toggleClass('hide');
	$('.news').removeClass('selected');
});

$('.open-menu').on('click', function(){
	$('.sub-menu').toggleClass('hide');
});