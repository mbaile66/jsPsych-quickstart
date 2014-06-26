function createStimulus (numbers, showProbe){
	$('body').append($('<div id="stimulus"></div>'));
	
	var width = 600;
	var height = 600;
	var xPosition = 250;
	var yPosition = 425;
	var paper = Raphael("stimulus", width, height);
	paper.text(xPosition,350,numbers[0]).attr({'font-size':24px});
	paper.text(xPosition +15, 350, "-");
	paper.text(xPosition+30, 350, numbers[2]);
	paper.text(xPosition+45, 350, "-");
	paper.text(xPosition+60, 350, numbers[4]);
	
	if (showProbe == 1){
		paper.text(xPosition+15, 340, numbers[1]);
		if (leftRight ==  1){
			paper.text(xPosition+30, yPosition,"Is the number " + numbers[1] + " on the left side?")}
		else {paper.text(xPosition+30,yPosition, "Is the number " + numbers[1] + " on the right side?")}
	} else if(showProbe == 2){
		paper.text(xPosition+45, 340, numbers[3]);
		if (leftRight ==  1){
			paper.text(xPosition+30, yPosition,"Is the number " + numbers[3] + " on the left side?")}
		else {paper.text(xPosition+30,yPosition, "Is the number " + numbers[3] + " on the right side?")}
	} else if(showProbe == 3){
		paper.text(xPosition+15, 340, numbers[3]);
		if (leftRight ==  1){
			paper.text(xPosition+30,yPosition,"Is the number " + numbers[3] + " on the left side?")}
		else {paper.text(xPosition+30,yPosition, "Is the number " + numbers[3] + " on the right side?")}
	} else if(showProbe == 4){
		paper.text(xPosition+45, 340, numbers[1]);
		if (leftRight ==  1){
			paper.text(xPosition+30,yPosition,"Is the number " + numbers[1] + " on the left side?")}
		else {paper.text(xPosition+30,yPosition, "Is the number " + numbers[1] + " on the right side?")}
		}

     else if(showProbe == 5){
				while (randProbeA = (numbers[0]) && (numbers[1]) && (numbers[2]) && (numbers[3]) && (numbers[4]) && (numbers[5]) && (numbers[1]+3) && (numbers[1]-3) && (numbers[1]+4) && (numbers[1]-4) && (numbers[1]+5) && (numbers[1]-5) && (numbers[1]+6) && (numbers[1]-6) && (numbers[1]+7) && (numbers[1]-7) && (numbers[1]+8) && (numbers[1]-8) && (numbers[1]+9) && (numbers[1]-9)); 
					{randProbeA = _.random(1,9);
					}
				paper.text(xPosition+15, 340, randProbeA);
				if (leftRight ==  1){
					paper.text(xPosition+30,yPosition,"Is the number " + randProbeA + " on the left side?")}
				else {paper.text(xPosition+30,yPosition, "Is the number " + randProbeA + " on the right side?")}
				}
	
	 else if(showProbe == 6){
				while (randProbeB = (numbers[0]) && (numbers[1]) && (numbers[2]) && (numbers[3]) && (numbers[4]) && (numbers[5]) && (numbers[3]+3) && (numbers[3]-3) && (numbers[3]+4) && (numbers[3]-4) && (numbers[3]+5) && (numbers[3]-5) && (numbers[3]+6) && (numbers[3]-6) && (numbers[3]+7) && (numbers[3]-7) && (numbers[3]+8) && (numbers[3]-8) && (numbers[3]+9) && (numbers[3]-9)); 
					{randProbeA = _.random(1,9);
					}
			paper.text(xPosition+45, 340, randProbeB);
			if (leftRight ==  1){
					paper.text(xPosition+30,yPosition,"Is the number " + randProbeB + " on the left side?")}
				else {paper.text(xPosition+30,yPosition, "Is the number " + randProbeB + " on the right side?")}
			}

	var html = $('#stimulus').html();
	$('#stimulus').remove();
	return html; 
	
} 		
