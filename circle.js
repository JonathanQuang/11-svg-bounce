console.log("loaded");
svg = document.getElementById("svgElement");

idCounter = 0;

var createCircle = function(event){

	xPos = event.offsetX;
	yPos = event.offsetY;

	theCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
	theCircle.setAttribute("cx",event.offsetX);
	theCircle.setAttribute("cy",event.offsetY);
	theCircle.setAttribute("r",25);
	theCircle.setAttribute("id",idCounter);
	idCounter+=1;
	
	svg.append(theCircle);

	xVel = Math.random()*5-10;
	yVel = Math.random()*5-10;

	var runAnimation = function() {
		xPos += xVel;
		yPos += yVel;

		theCircle.setAttribute("cx",xPos);
		theCircle.setAttribute("cy",yPos);

		if (xPos <= 25 || xPos >= 475){
			xVel *= -1;
		}	

		if (yPos <= 25 || yPos >= 475){
			yVel *= -1;
		}
	}
	
	currentInterval = setInterval(runAnimation,50);	
}


svg.addEventListener("click",createCircle);
