function setup() {
	// create a place to draw
	createCanvas(630, 470);
	noStroke();
	//noLoop();

}

function draw() {
	// background
	background(78, 82, 105);

	// draw rectangle
	fill(0);
	rect(50, 50, 210, 360);

	// draw X
	//strokeWeight(10.0);
	//strokeCap(ROUND);
	//if (mouseX < 50) {
	//mouseX = 50;
	//}
	//if (mouseY > 50) {
	//mouseY = 50;
	//}
	//if (mouseY > 350) {
	//mouseY = 350;
	//}

	stroke(194, 41, 53);
	strokeWeight(18);
	if (mouseX > 250) {
		mouseX = 250;
	}
	if (mouseX < 50) {
		mouseX = 50;
	}
	if (mouseY < 50) {
		mouseY = 50;
	}
	if (mouseY > 350) {
		mouseY = 350;
	}
	line(mouseX - 50, mouseY - 50, mouseX + 50, mouseY + 50);
	//	line(40, 30, 85, 80);
	line(mouseX - 50, mouseY + 50, mouseX + 50, mouseY - 50);

}
