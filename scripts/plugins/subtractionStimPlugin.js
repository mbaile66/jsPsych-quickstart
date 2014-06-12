function createStimulus(stim_type)
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

	var P1 = Math.floor(Math.random()  * 11);
	var P2 = Math.floor(Math.random()  * 11);
	
	while ((A - B - C) < 0)
	{ 
		A = Math.floor(Math.random() * (max - min + 1)) + min;
		B = Math.floor(Math.random() * (max - min + 1)) + min;
		C = Math.floor(Math.random() * (max - min + 1)) + min;
	}
		var t = paper.text(50, 50, A);
		var u = paper.text(65, 50, "-");
		var v = paper.text(80, 50, B);
		var w = paper.text(95, 50, "-");
		var x = paper.text(110, 50, C);
		
/*if (stim_type == 1) //2 probes, 0ms delay
	{
	while (P1 === P2)
		{
		P2 = Math.floor(Math.random() * 11);
		}
		var y = paper.text(65, 40, P1);
		var z = paper.text(95, 40, P2);
	}
else if (stim_type) = 2 //first probe, 0ms delay
	{	
	while (P1 === P2)
		{
		P2 = Math.floor(Math.random() * 11);
		}
		var y = paper.text(65, 40, P1);
	}	
else if (stim_type) = 3//second probe, 0ms delay
	{	
	while (P1 === P2)
		{
		P2 = Math.floor(Math.random() * 11);
		}
		var z = paper.text(95, 40, P2);
	}	
else //no probe, 0ms delay
*/	
	var html = $('#stimulus').html();
	$('#stimulus').remove();
	return html;
}
