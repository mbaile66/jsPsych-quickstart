var html_string = createStimulus();

$('body').html(html_string);

function createStimulus() 
{
	// create a div to hold stimulus
	$('body').append($('<div id="stimulus"></div>'));
	
	// create the raphael object
	var width = 320;
	var height = 200;
	var paper = Raphael("stimulus", width, height);
	
	var min = 1;
	var max = 20;
	var A = Math.floor(Math.random() * (max - min + 1)) + min;
	var B = Math.floor(Math.random() * (max - min + 1)) + min;
	var C = Math.floor(Math.random() * (max - min + 1)) + min;
	var randomNumber1 = Math.random();
	var randomNumber2 = Math.random();
	var P1 = Math.floor(randomNumber1 * 11);
	var P2 = Math.floor(randomNumber2 * 11);
	var t = paper.text(50, 50, A);
	var u = paper.text(65, 50, "-");
	var v = paper.text(80, 50, B);
	var w = paper.text(95, 50, "-");
	var x = paper.text(110, 50, C);
	var y = paper.text(65, 40, P1);
	var z = paper.text(95, 40, P2);
	while ((A - B - C) < 0)
	{ 
		//A = Math.floor(Math.random() * (max - min + 1)) + min;
		B = Math.floor(Math.random() * (max - min + 1)) + min;
		C = Math.floor(Math.random() * (max - min + 1)) + min;
	}
	//print(t,u,v);
	while (P1 === P2)
	{
		P2 = Math.floor(randomNumber2 * 11);
	}
	//print(t);
	
	// get the html string generated by above code
	var html = $('#stimulus').html();
	
	// remove the stimulus from the html document
	$('#stimulus').remove();
	
	// return html string
	return html;
}
