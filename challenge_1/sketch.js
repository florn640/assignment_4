function setup() {
	// create a place to draw
	createCanvas(640, 500);
	noStroke();
	//noLoop();
}

//function draw() {
// background (sky + grass)
//var size = 40
//for (var i = 0; i < 40; i++) {

//draw flower
function draw() {
	background(91, 184, 242);
	fill(41, 151, 2);
	rect(0, 310, 640, 500);
	//flower
	stroke(41, 139, 2);
	strokeWeight(6);
	line(100, 200, 100, 310);
	stroke(41, 139, 2);
	strokeWeight(6);
	noStroke();
	fill(255, 255, 255, 100);
	ellipse(100, 200, 50, 50);
	fill(255, 255, 255, 90);
	ellipse(100, 200, 40, 40);
	fill(255, 255, 255, 80);
	ellipse(100, 200, 30, 30);
	fill(255, 255, 255, 80);
	ellipse(100, 200, 20, 20);
	fill(41, 170, 20, 80);
	ellipse(100, 200, 20, 20);
	fill(41, 139, 2, 80);
	ellipse(100, 200, 15, 15);



}
