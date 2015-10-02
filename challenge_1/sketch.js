function setup() {
	// create a place to draw
	createCanvas(640, 500);
	noStroke();
	noLoop();
}

function draw() {
	background(91, 184, 242);
	fill(41, 151, 2);
	rect(0, 310, 640, 500);

	for (var i = 0; i < 35; i++) {
		drawFlower(random(640), random(130, 310));
	}


}
//draw flower
function drawFlower(x, y) {
	console.log(x, y);
	stroke(41, 139, 2);
	strokeWeight(6);
	line(x, y, x, y + 100);
	stroke(41, 139, 2);
	strokeWeight(6);
	noStroke();
	fill(255, 255, 255, 100);
	ellipse(x, y, 50, 50);
	fill(255, 255, 255, 90);
	ellipse(x, y, 40, 40);
	fill(255, 255, 255, 80);
	ellipse(x, y, 30, 30);
	fill(255, 255, 255, 80);
	ellipse(x, y, 20, 20);
	fill(41, 170, 20, 80);
	ellipse(x, y, 20, 20);
	fill(41, 139, 2, 80);
	ellipse(x, y, 15, 15);
}
