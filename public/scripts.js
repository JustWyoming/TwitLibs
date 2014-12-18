
$(function(){

	$('a.btn').on('click',function(){
		$(this).blur();
	});

	$('#libId').change(function(){
		var displayText = "please enter a hashtag";
		switch($(this).val()){
			case "1":
			displayText = "enter a verb ending in 'ing' ";
			break;

			case "2":
			displayText = "please enter a family member or sig other";
			break;

			case "3":
			displayText = "please enter a celebrity";
			break;

			case "4":
			displayText = "please enter an activity";
			break;

			case "5":
			displayText = "please enter a location";
			break;

			case "6":
			displayText = "please enter a Country or State";
			break;
		}

		$('#twitSearch').text(displayText);
		//location.href = '/libs/'+$(this).val();
		//var loadLib = $(this).val();
		
	}).trigger('change')

	// $('.refresh').on('click',function() {
 //    	 $.ajax({
 //    	 	url:'/' + 
 //    	 })
    	 
	// });

	// $('.saveTwit').on('click',(function(){
	// 	$(this).innerhtml($())
	// })

});