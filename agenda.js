/////
// Ap created an 'infinte' agenda that has editable appointment field
/////


$(document).ready(function(){

	// Initialize variables and arrays
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	var weekday = 0;
	var Today = new Date()
	var weekday = Today.getUTCDay()
	console.log("day", weekday);


	// Select and edit appointment fields
	function divClicked() {
	    var divHtml = $(this).html();
	    var editableText = $("<textarea class='col-xs-9' />");
	    editableText.val(divHtml);
	    $(this).replaceWith(editableText);
	    editableText.focus();
	    // setup the blur event for this new textarea
	    editableText.blur(editableTextBlurred);
	}

	function editableTextBlurred() {
	    var html = $(this).val();
	    var viewableText = $("<div class='col-xs-9 appointment' />");
	    viewableText.html(html);
	    $(this).replaceWith(viewableText);
	    // setup the click event for this new div
	    viewableText.click(divClicked);
	}
	
		// Enable appointment editing
	   	$(document).on('click','.appointment', divClicked);

	    // Detect that we are at bottom of page, and call autoloading function
        $(window).scroll(function() { 
            if  ($(window).scrollTop()+250 >= ($(document).height() - ($(window).height()))){

                    // Add another day
                    for (i=0; i<days.length; i++) {
                    	var incrementDay = days[i];

	                    var newDay = ('<div class="row">' + 
		  								'<div class="col-xs-3">' + incrementDay + '</div>' +
		  								'<div class="col-xs-9 appointment">Appointment</div>' +
										'</div>');
						
	                    $('.container').append(newDay);

			       
			        	// Select and edit appointment fields
			        	//$(".appointment").click(divClicked);

		        	}
            }

		});
		

});