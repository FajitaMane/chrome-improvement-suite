var chat_text = $('textarea')[0];

function readCharList() {
	chrome.storage.sync.get({
		charList: []
	}, function(items){
		if (items.charList.length > 0){
			//check for any available whispers
			for (var i = 0; i < items.charList.length; i++) {
				if (charList[i].whispers.length > 0) {
					console.log("whisper found for " + charList[i].charName);
				}
			}
		}
	})
}

chrome.tabs.create({
    url: chrome.extension.getURL('roll20whispers.html'),
    active: false
}, function(tab) {
    // After the tab has been created, open a window to inject the tab
    chrome.windows.create({
        tabId: tab.id,
        type: 'panel',
        focused: true,
        state: 'fullscreen'
    });
});
alert("on roll20");