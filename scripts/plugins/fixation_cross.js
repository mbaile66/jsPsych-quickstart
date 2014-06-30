function createFixation (){
	$('body').append($('<div id="stimulus"></div>'));
	
	var width = 800;
	var height = 800;
	var paper = Raphael("stimulus", width, height);
	var xPosition = 250;
		
	paper.text(xPosition+175, 350, "Hello").attr({'font-size':48});	
	
	var html = $('#stimulus').html();
	$('#stimulus').remove();
	return html; 
	
} 	
