console.log("loaded");
svg = document.getElementById("svgElement");

intervalStarted = false;
intervalReference = null;

idCounter = 0;
circleArray = [];

var createCircle = function(event){

	circleObj = {
		"xPos":event.offsetX,
		"yPos":event.offsetY,
		"xVel":((Math.random()*5)-10)*2,
		"yVel":((Math.random()*5)-10)*2
	}

	theCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
	circleObj["htmlReference"]=theCircle;
	circleObj.htmlReference.setAttribute("cx",circleObj.xPos);
	circleObj.htmlReference.setAttribute("cy",circleObj.yPos);
	circleObj.htmlReference.setAttribute("r",25);
	circleObj.htmlReference.setAttribute("id",idCounter);
	idCounter+=1;
	

	circleArray.push(circleObj);
	svg.append(theCircle);

	var runAnimation = function() {
		
			for (let circ of circleArray){
		
			circ.xPos += circ.xVel;
			circ.yPos += circ.yVel;

			circ.htmlReference.setAttribute("cx",circ.xPos);
			circ.htmlReference.setAttribute("cy",circ.yPos);

			if (circ.xPos <= 25 || circ.xPos >= 475){
				circ.xVel *= -1;
			}	

			if (circ.yPos <= 25 || circ.yPos >= 475){
				circ.yVel *= -1;
			}
		}
	}
	
	if (!intervalStarted){
		intervalReference = setInterval(runAnimation,50);
		intervalStarted = true;
	}
}


var clearSvg = function(){
	clearInterval(intervalReference);
	while (svg.firstChild){
		svg.removeChild(svg.firstChild);
	}
}

document.getElementById("clear").addEventListener("click",clearSvg);
svg.addEventListener("click",createCircle);
