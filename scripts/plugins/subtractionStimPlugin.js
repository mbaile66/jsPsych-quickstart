var html_string = createStimulus();

$('body').html(html_string);

// method two

$('body').append($('<div>', {
                    html: html_string,
                    id: 'jspsych-single-stim-stimulus'
                }));

function createStimulus() { 

	var newCanvas = $('body').append($('<canvas/>',{'id': 'Canvas', 'class':'radHuh'})
		.width(130)
		.height(50));
	var min = 1;
	var max = 20;
	var A = Math.floor(Math.random() * (max - min + 1)) + min;
	var B = Math.floor(Math.random() * (max - min + 1)) + min;
	var C = Math.floor(Math.random() * (max - min + 1)) + min;
	var randomNumber1 = Math.random();
	var randomNumber2 = Math.random();
	var P1 = Math.floor(randomNumber1 * 11);
	var P2 = Math.floor(randomNumber2 * 11);
	//var solVal = (A - B - C);
	var x = document.getElementById("Canvas");
	var ctx = x.getContext("2d");
	ctx.font = "12px Arial";
	ctx.font = "14px Arial";
	ctx.fillText("-",35,40);
	ctx.fillText("-",75,40);
	while ((A - B - C) < 0)
	{ 
		//A = Math.floor(Math.random() * (max - min + 1)) + min;
		B = Math.floor(Math.random() * (max - min + 1)) + min;
		C = Math.floor(Math.random() * (max - min + 1)) + min;
	}
	ctx.fillText(A,10,40);
	ctx.fillText(B,50,40);
	ctx.fillText(C,90,40);
	while (P1 === P2)
	{
		P2 = Math.floor(randomNumber2 * 11);
	}
	ctx.fillText(P1,30,25);
	ctx.fillText(P2,70,25);
}
