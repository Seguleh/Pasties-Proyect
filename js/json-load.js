(function($){
 
	$.fn.loadJSON = function(usr){

	    $.getJSON("load.json", function (data) {

			var elem=[], cont=0, last;

			$.each( data, function(id) {
				if(usr != "Jon Doe"){
					if(data[id].private != true){
						elem.push( "<div id='"+data[id].id+"' class='p-pastie cl text-justify col-lg-12 col-md-12'>" );
						elem.push( "<p class='p-title'>" + data[id].title + "<small> (Public)</small></p>" );
						elem.push( "<p class='p-owner'>" + data[id].owner + "</p>" );
						elem.push( "<p class='p-content'>" + data[id].content + "</p>" );
						elem.push( "</div>" );
						if(cont == 4) {
							last=parseInt(data[id].id, 10);
							return false;
						}
						cont++;
					}
				}else{
					if(data[id].owner == "Jon Doe"){
						elem.push( "<div id='"+data[id].id+"' class='p-pastie cl text-justify col-lg-12 col-md-12'>" );
						elem.push( "<p class='p-title'>" + data[id].title + "</p>" );
						elem.push( "<p class='p-owner'>" + data[id].owner + "</p>" );
						elem.push( "<p class='p-content'>" + data[id].content + "</p>" );
						elem.push( "</div>" );
						if(cont == 4) {
							last=parseInt(data[id].id, 10);
							return false;
						}
						cont++;
					}
				}
			});

			$( "<div/>", {
				"class": "row",
				"id": "father",
				html: elem.join( "" )
			}).appendTo( "#thy" );

			$(window).scroll(function() {

				var elemwut=[];

				if($(document).height() == $(window).scrollTop() + $(window).height()) {

					var meh = parseInt($("#father div").last().attr('id'), 10)+1;

					if(usr != "Jon Doe"){
						for (var i = meh; i <= meh+5; i++) {
							if(data[i].private != true){
								elemwut.push( "<div id='"+i+"' class='p-pastie cl animation text-justify col-lg-12 col-md-12'>" );
								elemwut.push( "<p class='p-title'>" + data[i].title + "<small> (Public)</small></p>" );
								elemwut.push( "<p class='p-owner'>" + data[i].owner + "</p>" );
								elemwut.push( "<p class='p-content'>" + data[i].content + "</p>" );
								elemwut.push( "</div>" );
							}
						}
					}else{
						for (var i = meh; i < meh+5; i++) {
							if(data[i].owner == "Jon Doe"){
								elemwut.push( "<div id='"+i+"' class='p-pastie cl animation text-justify col-lg-12 col-md-12'>" );
								elemwut.push( "<p class='p-title'>" + data[i].title + "</p>" );
								elemwut.push( "<p class='p-owner'>" + data[i].owner + "</p>" );
								elemwut.push( "<p class='p-content'>" + data[i].content + "</p>" );
								elemwut.push( "</div>" );
							}
						}
					}

					$(elemwut.join("")).appendTo( "#father" ).animate({opacity: 1}, 1500);
				}
			});
		});
	};
})(jQuery);