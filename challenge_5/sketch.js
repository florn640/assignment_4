function setup() {
	// create a place to draw
	createCanvas(640, 500);
	noStroke();

}

function draw() {
	// clear the background
	background(59, 23, 28);

	// draw the ellipse
	fill(255, 255, 255);
	ellipse(mouseX, mouseY, 53, 53);
	fill(4, 42, 236);
	ellipse(mouseX, mouseY, 30, 30);
}

function mouseDragged() {
	line(mouseX, mouseY, 10, 20);


}
