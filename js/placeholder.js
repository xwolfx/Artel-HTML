$(function(){
	/* Placeholder for IE */
	
		$('body').find("input[type='text'], input[type='password'], textarea").each(function() {
			var tp = $(this).attr("placeholder");
			console.log(tp);
			$(this).attr('value',tp);
		}).focusin(function() {
				var val = $(this).attr('placeholder');
				if($(this).val() == val) {
					$(this).attr('value','');
				}
			}).focusout(function() {
				var val = $(this).attr('placeholder');
				if($(this).val() == "") {
					$(this).attr('value', val);
				}
			});

		/* Protected send form */
		$("form").submit(function() {
			$(this).find("input[type='text']").each(function() {
				var val = $(this).attr('placeholder');
				if($(this).val() == val) {
					$(this).attr('value','');
				}
			})
		});
});