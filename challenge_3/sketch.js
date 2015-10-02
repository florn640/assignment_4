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

	stroke(194, 41, 53);
	strokeWeight(18);
	if (mouseX > 200)
		mouseX = 200;



	line(mouseX + 40, mouseY + 30, mouseX + 85, mouseY + 80);
	//	line(40, 30, 85, 80);
	line(mouseX + 85, mouseY + 30, mouseX + 40, mouseY + 80);



}
