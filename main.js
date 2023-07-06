img = "";
nose_x = 0;
nose_y = 0;

mario_y = 0;
mario_x = 0;


function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_game_over = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();

	
	
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');


	posenet = ml5.poseNet(video,modelLoaded);
	posenet.on('pose', gotPoses);

}

function modelLoaded()
{
	console.log("The model has Loaded");
}

function draw()
{
	game();
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		nose_x = results[0].pose.nose.x;
		nose_y = results[0].pose.nose.y;
	}
}










