var headerFn = function(target, lang, subDepth) {
	var html = '';

	if(lang == 'en') {
	
	}




	$(target).html(html);
	if(subDepth === '1') {
		$('img', target).each(function() {

			$(this).attr('src', $(this).attr('src').replace('../../webapp', '../../../webapp'));
		});
	}
}

var footerFn = function(target, lang, subDepth) {
	console.log(subDepth);
	var html = '';

	if(lang == 'en') {
	
	}


	$(target).html(html);

	if(subDepth === '1') {
		$('img', target).each(function() {

			$(this).attr('src', $(this).attr('src').replace('../../webapp', '../../../webapp'));
		});
	}
}