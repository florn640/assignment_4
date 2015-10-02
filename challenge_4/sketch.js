var xPositions = [];
var yPositions = [];
var aPositions = [];
var bPositions = [];
var cPositions = [];
var dPositions = [];


function setup() {
	createCanvas(640, 480);
	noStroke();
	for (var i = 0; i < 10; i++) {
		xPositions[i] = random(0, 640);
		yPositions[i] = random(0, 480);
		aPositions[i] = random(0, 640);
		bPositions[i] = random(0, 480);
		cPositions[i] = random(0, 640);
		dPositions[i] = random(0, 480);

	}
}

function draw() {
	background(154, 14, 8);

	for (var i = 0; i < 1000; i++) {
		xPositions[i] = xPositions[i] + random(-4, 4);
		yPositions[i] = yPositions[i] + random(-4, 4);

		fill(125, 251, 255);
		ellipse(xPositions[i], yPositions[i], 10, 10);
	}
	for (var g = 0; g < 1000; g++) {
		aPositions[g] = aPositions[g] + random(-4, 4);
		bPositions[g] = bPositions[g] + random(-4, 4);

		ellipse(aPositions[g], bPositions[g], 28, 28);
	}
	for (var u = 0; u < 1000; u++) {
		cPositions[u] = cPositions[u] + random(-5, 5);
		dPositions[u] = dPositions[u] + random(-5, 5);

		ellipse(cPositions[u], dPositions[u], 5, 5);
	}
}
