$(document).ready(function(){

	$.get("data.json",function(data){
		console.log(data);
		data.forEach(function(value,key){
			$("#append_div").append('\<div >\
				<div class="col-xs-1"></div>\
		<div class="col-xs-10">\
		<a href="#" class="pull-right edit glyphicon glyphicon-edit">Edit</a>\

			<h2>'+value.title+'</h2>\
			<img src= "'+value.img+'">\
			<p class="content">'+value.descr+'</p>\
			<div class="bottom_data">\
			<p class="pull-left">author : '+value.author_date+'</p>\
			</div>\
		</div>\
		<div class="col-xs-1"></div>\
		<div class="clear"></div>\
	</div>');

		})
	})

	console.log(window.location.href);
});  
