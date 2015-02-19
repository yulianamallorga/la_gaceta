$('.news').on('click', function(){
	$('.news').removeClass('selected');
	$(this).addClass('selected');
});

$('.back-to-top').on('click', function(){
	$('body').scrollTop(0);
});

$('.model-open').on('click', function(){
	$('.modal').removeClass('hide');
});

$('button.close').on('click', function(){
	$('.modal').toggleClass('hide');
});