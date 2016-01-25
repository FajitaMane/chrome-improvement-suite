$(document).change(removeDialog);

function removeDialog(){
	var dialog = $('play-limit-dialog').parent();
	$(dialog).remove();
}