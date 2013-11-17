jQuery(document).ready(function($) {
	$("#body").slideUp();
	$("#head").click(function() {
		$("#body").slideDown();
	});
});