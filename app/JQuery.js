// 1st Question
$("#bold p").each(function(){
	var me = $(this);
	me.html(me.text().replace(/(^\w+)/, "<strong>$1</strong>"));
});

// 2nd Question
$("#click").bind("click", function(){
	$( "<p>This is a click Event</p>" ).appendTo( "#body" );
});
$("#dblclick").bind("dblclick", function(){
	$( "<p>This is a double-click Event</p>" ).appendTo( "#dblbody");
});

// 3rd Question
$("#color").on("click", "button", function(event){
	$(event.delegateTarget).css("background-color", "lightblue");
});

