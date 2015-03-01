var template= $('#template-modal').html();

$('.open-menu').on('click', function(){
	$('.sub-menu').toggleClass('hide');
});


$('.news').on('click', function(){
	$('.news').removeClass('selected');
	$(this).addClass('selected');
});

$('.back-to-top').on('click', function(){
	$('body').scrollTop(0);
});


$('.news').on('click', function(){
	window.title = $(this).data('title');
	window.img = $(this).data('img');
	window.description = $(this).data('description');

});
	
$('.news').fancybox({
	content: template,
	
	beforeShow: function(){
		$('.fancybox-overlay #modal')
			.find('.news-title').html(window.title).end()
			.find('.news-img img').attr('src', window.img).end()
			.find('.news-description').html(window.description).end();
	}
});
