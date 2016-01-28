function removeDialog(){
	var dialog = $('play-limit-dialog').parent();
	if (dialog[0]){
		alert("dialog detected");
	}
	$(dialog).remove();
}

if ($(document)){
	$(document).on('change', removeDialog());
}

//alert("on bandcamp");
/*
chrome.runtime.onInstalled.addListener(function() {
	alert("listener attached");
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { hostEquals: 'www.bandcamp.com' },
					})
				],
				actions: [ new chrome.declarativeContent.ShowPageAction(), 
					function(){
						alert("on bandcamp page");
					}, removeDialog()
				]
			}
		]);
	});
});
*/