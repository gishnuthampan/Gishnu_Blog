$(document).ready(function(){

	$.get("data.json",function (data){
		console.log(data);
		data.forEach(function (value,key){
			$('#append_div').append('<div><div class="col-xs-offset-1 col-xs-10">\
				<a href="#" class="pull-right edit glyphicon glyphicon-edit" id="ed">Edit</a>\
				<a href="#" class="pull-right edit glyphicon glyphicon-plus" id="pl">Add</a>\
			<h2 class="content">'+value.title+'</h2>\
				<img src= "'+value.image+'">\
			<p class="para">'+value.descr+'</p>\
			<div class="bottom_data">\
			<p class="pull-left">Author : '+value.author_n_date+'</p></div>\
		<div class="col-xs-1"></div>\
		<div class="clear"></div>\
			</div>');
		});

		data.forEach(function (value,key){
			$('#append_edit').append('<div><div class="col-xs-offset-1 col-xs-10">\
				<a href="#" class="pull-right edit glyphicon glyphicon-edit" id="ed">Edit</a>\
				<a href="#" class="pull-right edit glyphicon glyphicon-plus" id="pl">Add</a>\
			<h2 class="content">'+value.title+'</h2>\
				<img src= "'+value.image+'">\
			<p class="para">'+value.descr+'</p>\
			<div class="bottom_data">\
			<p class="pull-left">Author : '+value.author_n_date+'</p></div>\
		<div class="col-xs-1"></div>\
		<div class="clear"></div>\
			</div>');
     // $("#log1").hide();
     // $("#sig1").hide();

		});
		});
	// console.log(window.location.href);
	$( document ).on( 'click', '.edit', function() {

   document.getElementById("append_edit").contentEditable = true;

});

$("#save").click(function(){

document.getElementById("append_edit").contentEditable = false;

})
});  
