$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var name = $("#nombre").val();
		var message = $("#mensaje").val();
		if(message == ""){
			alert("Debes escribir tu nombre y el mensaje");
			}else{
			$('#comentarios').append('<div</span><p class="center-align">'+message+'</p></div>');
			}
	});
});

$(document).ready(function(){
    $("button").click(function(){
        $("p").remove(".correr");
    });
});
$(document).ready(function(){
    $("button").click(function(){
        $("p").remove(".cocinar");
    });
});