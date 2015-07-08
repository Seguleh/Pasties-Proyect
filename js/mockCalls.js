function mockLogin(){
	if ("jondoe" == $("#form-username").val() && "12345" == $("#form-pass").val()) {
		$("#form-signin").remove();
		$("#reg-tab").remove();
		$('#nav-signin').append("<li class='navbar-right'><a href='index.html'><small>Logout</small></a></li>");
		$( "#nav-signin" ).append("<li class='navbar-right'><a href='profile.html'>Jon Doe</a></li>");
	}else{
		alert("Incorrect Username or Password (Hint: jondoe - 12345)");
	};
}

function mockPastie(){

	$("#pastie-div h1").remove();
	$("#form-pastie").remove();

	$( "<h1/>", {
		"class": "pastie-msg", 
		html: "Thank you for pasting!"
	}).appendTo( "#pastie-div" );

	window.setTimeout(function(){

        window.location.href = "index.html";

    }, 1500);
}

function mockRegister(){

	$("#form-reg").remove();

	$( "<h1/>", {
		"class": "reg-msg", 
		html: "Thank you for registering!"
	}).appendTo( "#form-parent" );

	window.setTimeout(function(){

    	window.location.href = "index.html";

    }, 1500);
}

$("#profile-form").submit(function () {

	$("#profile-form :input").attr("disabled", true);
	$("#profile-alert").addClass("in");
	return false;
});

$("#hashsearch p").click(function(){

	$("#search-input").attr("value", $("#search-input").attr("value") + $(this).text());
});