function createFixation (){
	$('body').append($('<div id="stimulus"></div>'));
	
	var paper = Raphael("stimulus", width, height);
	var width = 800;
	var height = 600;
	var xPosition = 250;
		
	paper.text(xPosition+175, 350, "Hello").attr({'font-size':48});	
	
	var html = $('#stimulus').html();
	$('#stimulus').remove();
	return html; 
	
} 	
