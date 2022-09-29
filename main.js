function preload() {
	world_start = loadSound("sounds/world_start.wav");
	jump = loadSound("sounds/jump.wav");
	collect = loadSound("sounds/coin.wav");
	gameover = loadSound("sounds/gameover.wav");
	die_mario = loadSound("sounds/mariodie.wav");
	kick = loadSound("sounds/kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('console_screen');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses)
}
function modelLoaded() {
	console.log("model loaded!")

}

function gotPoses(results) {
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






