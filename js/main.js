$('.news').on('click', function(){
	$('.news').removeClass('selected');
	$(this).addClass('selected');
});

$('.back-to-top').on('click', function(){
	$('body').scrollTop(0);
});