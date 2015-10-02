var ballX = 0;
var ballY = 0;

function setup() {
	// create a place to draw
	createCanvas(640, 500);


}

function draw() {
	// clear the background
	background(59, 23, 28);

	// draw the ellipse

	//	if (mouseIsPressed) {
	if (mouseIsPressed === false) {
		ballX = mouseX;
		ballY = mouseY;


	}
	ellipse(mouseX, mouseY, 53, 53);
	stroke(255, 255, 255);
	strokeWeight(8);
	line(mouseX, mouseY, ballX, ballY);
	fill(255, 255, 255);
	ellipse(ballX, ballY, 53, 53);
	fill(4, 42, 236);
	ellipse(ballX, ballY, 40, 40);



	fill(255, 255, 255);
	ellipse(ballX, ballY, 53, 53);
	fill(4, 42, 236);
	ellipse(ballX, ballY, 40, 40);



}
