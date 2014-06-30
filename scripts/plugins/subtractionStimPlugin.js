function createStimulus (numbers, showProbe, showFeedback, answerCorrect, probeCorrect){
	$('body').append($('<div id="stimulus"></div>'));
	
	var width = 800;
	var height = 600;
	var xPosition = 250;
	var yPosition = 425;
	var paper = Raphael("stimulus", width, height);
	paper.text(xPosition+25,350,numbers[0]).attr({'font-size':48});	
	paper.text(xPosition +75, 350, "-").attr({'font-size':48});
	paper.text(xPosition+125, 350, numbers[2]).attr({'font-size':48});
	paper.text(xPosition+175, 350, "-").attr({'font-size':48});
	paper.text(xPosition+225, 350, numbers[4]).attr({'font-size':48});
	paper.text(xPosition+75, yPosition+100, "Answer  =").attr({'font-size':30});
	paper.text(xPosition+75, yPosition+150, "Is   present?").attr({'font-size':30});
	
	if (showProbe == 1){
		paper.text(xPosition+75, 325, numbers[1]).attr({'font-size':24});
	} else if(showProbe == 2){
		paper.text(xPosition+175, 325, numbers[3]).attr({'font-size':24});
	}
	
	if(showFeedback == true){
		if(answerCorrect == true){
			paper.image("img/checkmark.gif", xPosition, yPosition+100, 29, 35);
			} else {
				paper.image("img/xmark.gif", xPosition, yPosition+100, 29, 35);
				}
	
		if(probeCorrect == true){
			paper.image("img/checkmark.gif", xPosition, yPosition+150, 29, 35);
			} else {
				paper.image("img/xmark.gif", xPosition, yPosition+150, 29, 35);
				}
	}
		
	
	var html = $('#stimulus').html();
	$('#stimulus').remove();
	return html; 
	
} 		
