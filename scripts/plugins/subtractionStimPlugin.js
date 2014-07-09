function createStimulus (numbers, showProbe, showFeedback, answerCorrect, probeCorrect){
	$('body').append($('<div id="stimulus"></div>'));
	
	var width = 800;
	var height = 600;
	var xPosition = 250;
	var yPosition = 225;
	var paper = Raphael("stimulus", width, height);
	paper.text(xPosition+25,150,numbers[0]).attr({'font-size':48});	
	paper.text(xPosition +75, 150, "-").attr({'font-size':48});
	paper.text(xPosition+125, 150, numbers[2]).attr({'font-size':48});
	paper.text(xPosition+175, 150, "-").attr({'font-size':48});
	paper.text(xPosition+225, 150, numbers[4]).attr({'font-size':48});
	

	

	if (showProbe == 1){
		paper.text(xPosition+75, 125, numbers[1]).attr({'font-size':24});
	} else if(showProbe == 2){
		paper.text(xPosition+175, 125, numbers[3]).attr({'font-size':24});
	}

	
	if(showFeedback == true){
		
		paper.text(xPosition+225, yPosition+100, numbers[5]).attr({'font-size':30});
		paper.text(xPosition+150, yPosition+100, "Answer =").attr({'font-size':30});
		
		if (numbers[6] == 4){
		paper.text(xPosition+25, yPosition+150, "4  present?").attr({'font-size':30});
		}
		else if (numbers[6] == 5){
		paper.text(xPosition+25, yPosition+150, "5  present?").attr({'font-size':30});
		}
		else {
		paper.text(xPosition+25, yPosition+150, "6  present?").attr({'font-size':30});
		}
		
		if(answerCorrect == true){
			paper.image("img/checkmark.gif", xPosition+230, yPosition+80, 29, 35);
			} else {
				paper.image("img/xmark.gif", xPosition+230, yPosition+80, 29, 35);
				}
	
		if(probeCorrect == true){
			paper.image("img/checkmark.gif", xPosition+100, yPosition+130, 29, 35);
			} else {
				paper.image("img/xmark.gif", xPosition+100, yPosition+130, 29, 35);
				}
	}
		
	
	var html = $('#stimulus').html();
	$('#stimulus').remove();
	return html; 
	
} 		
