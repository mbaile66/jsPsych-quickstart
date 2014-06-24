function createStimulus (numbers, showProbe){
	$('body').append($('<div id="stimulus"></div>'));
	
	var width = 600;
	var height = 400;
	var paper = Raphael("stimulus", width, height);
	paper.text(50,50,numbers[0]);
	paper.text(65, 50, "-");
	paper.text(80, 50, numbers[2]);
	paper.text(95, 50, "-");
	paper.text(110, 50, numbers[4]);
	
	if (showProbe == 1){
		paper.text(65, 40, numbers[1]);
	} else if(showProbe == 2){
		paper.text(95, 40, numbers[3]);
	} else if(showProbe == 3){
		paper.text(65, 40, numbers[3]);
	} else if(showProbe == 4){
		paper.text(95, 40, numbers[1]);
    } else if(showProbe == 5){
		
			//generate a random number named randProbeA unique to row and +-2 of [1]
			var randProbeA = [0,1,2,3,4,5,6,7,8,9]
			//remove all items from array that are already in the row and whose distance from [1] > 2
			_.without((randProbeA),numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],(numbers[1]+3),(numbers[1]-3),(numbers[1]+4),(numbers[1]-4),(numbers[1]+5),(numbers[1]-5),(numbers[1]+6),(numbers[1]-6),(numbers[1]+7),(numbers[1]-7),(numbers[1]+8),(numbers[1]-8),(numbers[1]+9),(numbers[1]-9));
			//update randProbeA to become a randomly selected number from the remaining array 
			randProbeA = randProbeA[Math.floor(Math.random()*items.length)];
			paper.text(65, 40, randProbeA);			
	
	} else if(showProbe == 6){
			
			var randProbeB = [0,1,2,3,4,5,6,7,8,9]
			
			_.without((randProbeB),numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],(numbers[3]+3),(numbers[3]-3),(numbers[3]+4),(numbers[3]-4),(numbers[3]+5),(numbers[3]-5),(numbers[3]+6),(numbers[3]-6),(numbers[3]+7),(numbers[3]-7),(numbers[3]+8),(numbers[3]-8),(numbers[3]+9),(numbers[3]-9));
			
			randProbeA = randProbeA[Math.floor(Math.random()*items.length)];
			
			paper.text(65, 40, randProbeA);
		}

	var html = $('#stimulus').html();
	$('#stimulus').remove();
	return html;
} 
