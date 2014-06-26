function createStimulus (numbers, showProbe){
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
	} else if(showProbe == 3){
		paper.text(xPosition+75, 325, numbers[3]).attr({'font-size':24});
	} else if(showProbe == 4){
		paper.text(xPosition+175, 325, numbers[1]).attr({'font-size':24});
	} else if(showProbe == 5)
				//keep generating a random number until a number between 1 and 9
				//is found that is within 2 of the left target probe (numbers[3])
				{
				while ((randProbeA == (numbers[0])) && (randProbeA ==(numbers[1])) && (randProbeA ==(numbers[2])) && (randProbeA ==(numbers[3])) && (randProbeA ==(numbers[4])) && (randProbeA ==(numbers[5])) && (randProbeA ==(numbers[3]+3)) && (randProbeA ==(numbers[3]-3)) && (randProbeA ==(numbers[3]+4)) && (randProbeA ==(numbers[3]-4)) && randProbeA ==(numbers[3]+5) && randProbeA ==(numbers[3]-5) && randProbeA ==(numbers[3]+6) && randProbeA ==(numbers[3]-6) && randProbeA ==(numbers[3]+7) && randProbeA ==(numbers[3]-7) && randProbeA ==(numbers[3]+8) && randProbeA ==(numbers[3]-8) && randProbeA ==(numbers[3]+9) && randProbeA ==(numbers[3]-9))
					{ 
					randProbeA = _.random(1,9);
					}
				paper.text(xPosition+75, 325, randProbeA).attr({'font-size':24});
				}
				 
		else if(showProbe == 6){
				//keep generating a random number until a number between 1 and 9
				//is found that is within 2 of the left target probe (numbers[3])
				while ((randProbeB == (numbers[0])) && randProbeB ==(numbers[1]) && randProbeB ==(numbers[2]) && randProbeB ==(numbers[3]) && randProbeB ==(numbers[4]) && randProbeB ==(numbers[5]) && randProbeB ==(numbers[3]+3) && randProbeB ==(numbers[3]-3) && randProbeB ==(numbers[3]+4) && randProbeB ==(numbers[3]-4) && randProbeB ==(numbers[3]+5) && randProbeB ==(numbers[3]-5) && randProbeB ==(numbers[3]+6) && randProbeB ==(numbers[3]-6) && randProbeB ==(numbers[3]+7) && randProbeB ==(numbers[3]-7) && randProbeB ==(numbers[3]+8) && randProbeB ==(numbers[3]-8) && randProbeB ==(numbers[3]+9) && randProbeB ==(numbers[3]-9))
					{ 
					randProbeB = _.random(1,9);
					}
			paper.text(xPosition+175, 325, randProbeB).attr({'font-size':24});
	}		
	var html = $('#stimulus').html();
	$('#stimulus').remove();
	return html; 
	
} 		
