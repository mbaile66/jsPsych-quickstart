function createFixation (){
	$('body').append($('<div id="stimulus"></div>'));
	
	var width = 800;
	var height = 600;
	var xPosition = 250;
		
	paper.text(xPosition+125, 350, '+'.attr({'font-size':48});	
	
	var html = $('#stimulus').html();
	$('#stimulus').remove();
	return html; 
	
} 	
