if (window.location.href.match('kissanime.ru') || window.location.href.indexOf('kissanime.ru') > -1) {
	if (window.location.href.match('BookmarkList') || window.location.href.indexOf('BookmarkList') > -1) {
		var list = document.querySelectorAll('.listing td:first-child');
		var KAB = 'KissAnime Bookmarks :\r\n\r\n';
		for (var i = 0; i < list.length; i++) {
			KAB += (i+1) + '. ' + list[i].innerText + '\r\n'
		}
		var hiddenElement = document.createElement('a');
		hiddenElement.target = '_blank';
		hiddenElement.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURI(KAB));
		hiddenElement.setAttribute('download', 'kissanime_bookmarks.txt');
		hiddenElement.click();
	} else {
		window.alert('Run this script in the Bookmarks page!')
	}
} else {
	window.alert('Run this script on KissAnime\'s Bookmarks page.')
}
