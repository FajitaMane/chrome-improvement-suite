var CHAR_LIMIT = 10;
var INPUTS_ON_SCREEN = 5;

function saveOptions() {
	var charList = [];
	for (i = 1; i <= 5; i++){
		var text = document.getElementById('player' + i).value;
		if (text != ''){
			console.log("adding player " + text);
			charList[charList.length] = text;
		}
	}
	chrome.storage.sync.set({
		charList: charList
	  }, function() {
	  	document.getElementById('saveButton').visibility = 'none';
	  	location.reload();
	  }
	);
}

function addToOptions() {

}

function restoreOptions() {
	chrome.storage.sync.get({
		charList: []
	}, function(items) {
		for (var i = 0; i < items.charList.length; i++) {
			console.log("recovered " + items.charList[i]);
		}
		//if a charList is saved
		if (items.charList.length > 0) {
			//change the top h1
			if (items.charList.length == CHAR_LIMIT) {
				$("h1").innerHTML = "Character List Maxed At " + CHAR_LIMIT;
			} else {
				$("h1")[0].innerHTML = "Add Up To" 
					+ (CHAR_LIMIT - items.charList.length) 
					+ " Characters to the List";
				$("#saveButton").html("Add Characters");				
			}

			//remove unneeded input elements
			var textInputs = $('input');
			for (var i = 0; i < textInputs.length; i++) {
				if (i > CHAR_LIMIT - items.charList.length){
					textInputs[i].remove();
				}
			}
				
			//insert the saved characters
			var hr = $("<hr>");
			hr.insertAfter($("#saveButton"));
			var h1 = $("<h1>");
			h1.insertAfter($("hr")[0]);
			$(h1).html("Existing Characters");
			for (var i = 0; i < items.charList.length; i++) {
				var p = $("<p>", {class: "character"});
				p.html(items.charList[i]);
				p.insertAfter($("h1")[1]);
			}
		}
	});
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('saveButton').addEventListener('click', saveOptions);