$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	initializeLib(ctx);
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	numObjects = 0;
	numObjectsLoaded =0;
	var screen = 0;
	var CAR1 = createObjectPic("Images/CAR1.png")
	var CAR2 = createObjectPic("Images/CAR2.png")
	var RACETRACK = createObjectPic("Images/RACETRACKOFFICIAL2.png")
	var keys = []
	
	var c1Angle = 0;
	var c2Angle = 0;
	var car1Speed = 0;
	var car2Speed = 0;
	
	var AccelerationSound1 = addSound("Sounds/AccelerationSound.mp3")
	var AccelerationSound2 = addSound("Sounds/AccelerationSound.mp3")
	var Crash1 = addSound("Sounds/CrashSound.mp3")
	var Crash2 = addSound("Sounds/CrashSound.mp3")
	var TireScreech1 = addSound("Sounds/TireScreechSound1.mp3")
	var TireScreech2 = addSound("Sounds/TireScreechSound1.mp3")
	var TurnTimer1= 1;
	var TurnTimer2= 1;
	
	
		var Wall1 = createWall (320,180,475,255, null);
				Wall1.colour = 'green';
		var Wall2 = createWall (415,390,670,85, null);
				Wall2.colour = 'grey';
		var Wall3 = createWall (790,275,125,120, null);
				Wall3.colour = 'green';
		var Wall4 = createWall (610,135,130,120, null);
				Wall4.colour = 'grey';
		//var Wall5 = createWall (1100,412,35,60, null);
				//Wall5.colour = 'blue';
		var Wall6 = createWall (1065,412,60,55, null);
				Wall6.colour = 'green';
	
		
		
		
		
		
		
		
		
		
		var Wall11 = createWall (124,400,76,77, null);
				Wall11.colour = 'green';
		var Wall12 = createWall (170,385,400,50, null);	
				Wall12.colour = 'red';
		var Wall13 = createWall (2,4,190,260, null);	
				Wall13.colour = 'blue';
		var Wall14 = createWall (270,540,50,60, null);	
				Wall14.colour = 'blue';
				
		var Wall15 = createWall (1100,2,200,290, null);	
				Wall15.colour = 'blue';
//////////////////////////////////////////////////////////////////////////////////////////////////////
	var Wall7 = createWall (-40,0,39,800, null);
			Wall7.colour = 'black';
	var Wall8 = createWall (1285,1,25,800, null);
			Wall8.colour = '#565051';
	var Wall9 = createWall (1,1,1290,15, null);
			Wall9.colour = '#565051';
	var Wall10 = createWall (1,600,1290,15, null);
			Wall10.colour = '#565051';
	
	var FinishLine = createWall(940,499,7,85,null);
		FinishLine.colour = 'white';
		
	var StartPosition1 = createWall(890,505,4,30,null);
		StartPosition1.colour = 'white';
		
	var StartPosition2 = createWall(840,547.5,4,30,null);
		StartPosition2.colour = 'white';
		
	var Button1 = createButton (500,140,240,100, "Images/Play.png", "");
		Button1.job = function(){
		screen = 2;
		}
	var Button2 = createButton (500,250,240,100, "Images/instructions.jpg", "");
	Button2.job = function(){
	screen = 3;
		}
		
	var Button3 = createButton (15,15,200,80, "Images/BackButton.png", "");
	Button3.job = function(){
	screen = 1;
		}	
		
		
		
		
	
	var StartTimer = 4500;
	
	var Three = addSound("Sounds/3.mp3");
	var Two = addSound("Sounds/2.mp3");
	var One = addSound("Sounds/1.mp3");
	var Go = addSound("Sounds/Go.mp3");
	var Red3 = createObjectPic("Images/RedCircle.png");
	var Red2 = createObjectPic("Images/RedCircle.png");
	var Red1 = createObjectPic("Images/RedCircle.png");
	var Green = createObjectPic("Images/GreenCircle.png");
	var Box = createWall(40,125,220,50,null);
		Box.colour = '#2C3539';
	
	var OrangeLap1 = createWall (920,470,30,130,null);
	var OrangeLap2 = createWall (610,15,30,130,null);
	var YellowLap1 = createWall (920,470,30,130,null);
	var YellowLap2 = createWall (610,15,30,130,null);
	
	var OrangeLap1Number = 0;
	var OrangeLap2Number = 0;
	
	var YellowLap1Number = 0;
	var YellowLap2Number = 0;
	
	var OrangeLap = 0;
	var YellowLap = 0;
	
	var isOLap1= false;
	var isOLap2= false;
	var isYLap1= false;
	var isYLap2= false;
		
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	/////////////////////
	///STATE VARIABLES
	/// All your variables get their start values here.
	
	CAR1.x = 825;
	CAR1.y = 503.5;
	CAR1.speedx=0;
	CAR1.speedy=0;
	CAR1.scale = 0.0659;
	
	CAR2.x = 775;
	CAR2.y = 547.5;
	CAR2.speedx=0;
	CAR2.speedy=0;
	CAR2.scale = 0.09;
	
	RACETRACK.scale = 0.865
	
	Green.scale = 0.0815;
	Green.x = 200;
	Green.y = 124;
	
	
	Red3.scale = 0.02;
	Red3.x = 50;
	Red3.y = 130;
	
	Red2.scale = 0.02;
	Red2.x = 100;
	Red2.y = 130;
	
	Red1.scale = 0.02;
	Red1.x = 150;
	Red1.y = 130;
	
	
	
	
	
	
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		///////////////////////
		//	CLEAR THE SCREEN
		////////////////////
		ctx.fillStyle = 'Blue';
		ctx.fillRect(0,0, w, h);	
		
		
		
		if(screen == 0){
		/////////////////////
		//	LOADING SCREEN
			ctx.fillStyle = 'blue';
			ctx.fillText("Loading Images & Sounds: " + numObjectsLoaded + "/" + numObjects,100,100)
		
			if(numObjectsLoaded >= numObjects) screen = 1;
		//////////////////////////////////////////////////////////////////////////
		}else if(screen == 1){//Main Menu
		
		ctx.fillStyle = 'Black'
			ctx.fillText("Main Menu",420,80);
			ctx.font = "60pt Arial";
			
			
			
			
		Button1.draw()
		Button2.draw()
		
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		
		
		
		
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		}else if(screen == 2){//Game Screen
		StartTimer-= 60;
		
	
	
		
		
		//var angle = Math.atan(CAR1.speedy/CAR1.speedx);
		CAR1.rotation = (c1Angle * 180 / Math.PI )
		CAR1.speedx = Math.cos(c1Angle) * car1Speed
		CAR1.speedy = Math.sin(c1Angle) * car1Speed
		CAR1.x+=CAR1.speedx
		CAR1.y+=CAR1.speedy
		
		car1Speed *=0.985
		
		CAR2.rotation = (c2Angle * 180 / Math.PI )
		CAR2.speedx = Math.cos(c2Angle) * car2Speed
		CAR2.speedy = Math.sin(c2Angle) * car2Speed
		CAR2.x+=CAR2.speedx
		CAR2.y+=CAR2.speedy
		
		car2Speed *=0.985
		
		
////////////////////////////////////////////////////////////////////////////////////
		
		if (search(keys,37)&& ( car1Speed > 0.2 || car1Speed < -0.2)){//left
		car1Speed != 0;
		c1Angle -= 0.12
		TurnTimer1+=1;
			
		}if (search(keys, 39)&& (car1Speed > 0.2 || car1Speed < -0.2)){//right
			car1Speed != 0;
			c1Angle += 0.12
			TurnTimer1+=1;
			
		}else{
		TurnTimer1=0
		}
		
		
		
	
		if (search(keys, 38)&& StartTimer < 0){//up
			car1Speed += 0.8
			//AccelerationSound1.play()
			
	
		}if (search(keys,40)&& StartTimer < 0){//down
			car1Speed -= 1.25
			
			
		}if(search(keys,16)){//Shift
			car1Speed *= 0.65
			TireScreech1.play()
		}
		
		
	//////////////////////////////////////////////////////////////	
		
		
		if(search(keys,87)&& StartTimer < 0){//W UP
		car2Speed += 0.8
		//AccelerationSound2.play()
			
		}if (search(keys, 65)&& (car2Speed > 0.2  || car2Speed < -0.2)){//A Left
			car2Speed != 0;
			c2Angle -= 0.12
			TurnTimer2+=1;
			
	
		}if (search(keys, 68)&& (car2Speed > 0.2 || car2Speed < -0.2)){//D Right
			car2Speed != 0;
			c2Angle += 0.12
			TurnTimer2+=1;
		
		}else{
		TurnTimer2=0
		
		
		
		
		}if (search(keys,83)&& StartTimer < 0){// S Down
			car2Speed -= 1.25
			
		}if(search(keys,32)){//SpaceBar
			car2Speed *= 0.65
			TireScreech2.play()
			
		}
		
///////////////////////////////////////////////////////////////////////////////////////////		

		
		
		if(CAR1.collideObject  (CAR2)){
				if(car1Speed > car2Speed)
				Crash1.play()
				car1Speed*=-0.2;
				car2Speed*=1.2
				CAR1.x-=CAR1.speedx
				CAR1.y-=CAR1.speedy
				
				
			}
		
		if(CAR2.collideObject  (CAR1)){
				if(car2Speed > car1Speed)
				Crash2.play()
				car1Speed*=-0.2;
				car2Speed*=0.2;
				CAR2.x-=CAR2.speedx
				CAR2.y-=CAR2.speedy
				
				}
			
	if (TurnTimer1==15){
		TireScreech1.play()
		TurnTimer1=1;
		
	}if(TurnTimer2==15){
		TireScreech2.play()
		TurnTimer2= 1;
		}
		
			
		
		
			RACETRACK.draw()
			FinishLine.draw()
			StartPosition1.draw()
			StartPosition2.draw()
			CAR1.draw()
			CAR2.draw()
			
			ctx.fillStyle = '#F87217';
		ctx.font = '80px Times New Roman';
		ctx.fillText(OrangeLap, 50,100);
		ctx.fillStyle = '#FFD801';
		ctx.font = '80px Times New Roman';
		ctx.fillText(YellowLap, 1000,100);
			

		
			
			
			/*
			Wall1.draw()
			Wall2.draw()
			
			Wall3.draw()
			
			Wall4.draw()
			
			//Wall5.draw()
			Wall6.draw()
		*/
			
			Wall7.draw()
			
			Wall8.draw()
			Wall9.draw()
			Wall10.draw()
			/*
			Wall11.draw()
			
			Wall12.draw()
			
			Wall13.draw()
			
			Wall14.draw()
			
			Wall15.draw()
			*/
			
			
			
			Box.draw()
			
		///////////////////////////////////////////////////////////////////////////////////////////////////////////
			
		if (CAR1.collideObject (Wall1)){
			car1Speed*=0.825;
			
		
		
		}if (CAR1.collideObject (Wall2)){
			car1Speed*=0.825;
			
		
		}if (CAR1.collideObject (Wall3)){
			car1Speed*=0.825;
	
		
		
		}if (CAR1.collideObject (Wall4)){
			car1Speed*=0.825;
			
		
		}if (CAR1.collideObject (Wall6)){
			car1Speed*=0.825;
			
		}if (CAR1.collideObject (Wall11)){
			car1Speed*=0.825;
			
		}if (CAR1.collideObject (Wall12)){
			car1Speed*=0.825;
			
		}if (CAR1.collideObject (Wall13)){
			car1Speed*=0.825;
			
		}if (CAR1.collideObject (Wall14)){
			car1Speed*=0.825;
			
		}if (CAR1.collideObject (Wall15)){
			car1Speed*=0.825;
			
		
		}if (CAR1.collideObject (Wall7)){
			car1Speed*=-0.1;
			CAR1.x-=CAR1.speedx
			CAR1.y-=CAR1.speedy
			Crash1.play()
		
		}if (CAR1.collideObject (Wall8)){
			car1Speed*=-0.1;
			CAR1.x-=CAR1.speedx
			CAR1.y-=CAR1.speedy
			Crash1.play()
		
		}if (CAR1.collideObject (Wall9)){
			car1Speed*=-0.1;
			CAR1.x-=CAR1.speedx
			CAR1.y-=CAR1.speedy
		
			Crash1.play()
			
		}if (CAR1.collideObject (Wall10)){
			car1Speed*=-0.1;
			CAR1.x-=CAR1.speedx
			CAR1.y-=CAR1.speedy
			
			Crash1.play()
			
		
		}if (CAR1.collideObject (OrangeLap1) && isOLap1 == false){
			OrangeLap1Number += 1;
			isOLap1 = true
			isOLap2 = false
			
		}if (CAR1.collideObject (OrangeLap2) && isOLap2 == false && isOLap1 == true){	
			OrangeLap2Number += 1;
			isOLap1 = false
			isOLap2 = true
		

		}if (OrangeLap1Number == 2 && OrangeLap2Number == 1){	
			OrangeLap = 1;
		
		}if (OrangeLap1Number == 3 && OrangeLap2Number == 2){	
			OrangeLap = 2;
			
		}if (OrangeLap1Number == 4 && OrangeLap2Number == 3){	
			OrangeLap = 3;
			
			
		}if (OrangeLap1Number == 5 && OrangeLap2Number == 4){	
			OrangeLap = 4;
		
		
/////////////////////////////////////////////////////////////////////////////////////
		

		
		
		}if (CAR2.collideObject (Wall1)){
			car2Speed*=0.825;

		
		}if (CAR2.collideObject (Wall2)){
			car2Speed*=0.825;
			
		
		}if (CAR2.collideObject (Wall3)){
			car2Speed*=0.825;
			
	
		}if (CAR2.collideObject (Wall4)){
			car2Speed*=0.825;
			
		
		}if (CAR2.collideObject (Wall6)){
			car2Speed*=0.825;
			
		}if (CAR2.collideObject (Wall11)){
			car2Speed*=0.825;
			
		}if (CAR2.collideObject (Wall12)){
			car2Speed*=0.825;
			
		}if (CAR2.collideObject (Wall13)){
			car2Speed*=0.825;
			
		}if (CAR2.collideObject (Wall14)){
			car2Speed*=0.825;
			
		}if (CAR2.collideObject (Wall15)){
			car2Speed*=0.825;
			
		
		
		}if (CAR2.collideObject (Wall7)){
			car2Speed*=-0.01;
			
			CAR2.x-=CAR2.speedx
			CAR2.y-=CAR2.speedy
			
			Crash2.play()
			
		}if (CAR2.collideObject (Wall8)){
			car2Speed*=-0.01;
			CAR2.x-=CAR2.speedx
			CAR2.y-=CAR2.speedy
			
			Crash2.play()
			
		}if (CAR2.collideObject (Wall9)){
			car2Speed*=-0.01;
			
			CAR2.x-=CAR2.speedx
			CAR2.y-=CAR2.speedy
			
			Crash2.play()
			
		}if (CAR2.collideObject (Wall10)){
			car2Speed*=-0.01; 
			CAR2.x-=CAR2.speedx
			CAR2.y-=CAR2.speedy	
			Crash2.play()
			
		}if (CAR2.collideObject (YellowLap1) && isYLap1 == false){
			YellowLap1Number += 1;	
			isYLap1 = true
			isYLap2 = false
		}if (CAR2.collideObject (YellowLap2) && isYLap2 == false && isYLap1 == true){
			YellowLap2Number += 1;		
			isYLap1 = false
			isYLap2 = true
			
		}if (YellowLap1Number == 2 && YellowLap2Number == 1){	
			YellowLap = 1;
		
		}if (YellowLap1Number == 3 && YellowLap2Number ==2){	
			YellowLap = 2;
			
		}if (YellowLap1Number == 4 && YellowLap2Number == 3){	
			YellowLap = 3;
			
		}if (YellowLap1Number == 5 && YellowLap2Number == 4){	
			YellowLap = 4;	
///////////////////////////////////////////////////////////////////////////////		
			
		}if (StartTimer == 3000){
		Red3.draw()
		Three.play()
		}
		
		if (StartTimer == 2040){
		Red2.draw()
		Two.play()
		}
		
		if (StartTimer == 1020){
		Red1.draw()
		One.play()
		}
		
		if (StartTimer == 0){
		Green.draw()
		Go.play()
		}
		
////////////////////////////////////////////////////////////////////////
			
	if (StartTimer < 3000){
		Red3.draw()
		
		}
		
		if (StartTimer < 2040){
		Red2.draw()
		
		}
		
		if (StartTimer < 1020){
		Red1.draw()
		
		}
		
		if (StartTimer < 0){
		Green.draw()
		
		}		
		
		if (StartTimer <-1980){
		Green.x+=2000;
		Red3.x+=2000;
		Red2.x+=2000;
		Red1.x+=2000;
		Box.x+=2000;
		}
		
		
		
///////////////////////////////////////////////////////////////////////////		
			
			
			
		
			
			
			
			
		
			
		
			
		}else if(screen == 3){
		//Instructions
		
		Button3.draw()
		
		ctx.fillStyle = '#D1D0CE';
		ctx.fillRect (250,50, 800,500)
		ctx.fillStyle = 'black';
		ctx.font = " 50px Times New Roman";
		ctx.fillText ("INSTRUCTIONS", 450,40);
		ctx.font = " 35px Times New Roman";
		ctx.fillText ("PLAYER 1:", 275,80);
		ctx.font = " 30px Times New Roman";
		ctx.fillStyle = '#FFD801';
		ctx.fillText ("Orange Car",275,110);
		ctx.fillStyle = 'black';
		ctx.fillText ("Arrow Keys Movement",275,140);
		ctx.fillText ("Shift = HandBrake",275,170);
		ctx.font = " 35px Times New Roman";
		ctx.fillText ("PLAYER 2:",275,240);
		ctx.fillStyle = 'yellow';
		ctx.font = " 30px Times New Roman";
		ctx.fillText ("Yellow Car",275,270);
		ctx.fillStyle = 'black';
		ctx.fillText ("WASD Movement",275,300);
		ctx.fillText ("SpaceBar = HandBrake",275,330);
		
		
		}
		
		console.log(keys);
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	

	
	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		//Runs this code whenever the mouse is clicked
		//For more screens for your game, just add more else ifs
		if(screen == 0){
		
		
		}else if (screen == 1){
			if (Button1.isMouseOver()) Button1.job()
			if (Button2.isMouseOver()) Button2.job()
		
		}else if (screen == 3){
			if (Button3.isMouseOver()) Button3.job()
		
		
	   
		 }
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;
		updateMouse(mx,my);

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////

	window.addEventListener('keyup', function(evt){
			var key = evt.keyCode;
			
			if(search(keys, key)) remove(keys, key);
	}, false);
	
	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	// up 38
	//down 40
	//right 39
	//left 37
	
		if(!(search(keys, key))) keys.push(key); 
	
	/*
		if(key==37){//left
		
	
		}else if (key == 38){//up
		
	
		}else if (key == 39){//right
		
	
		}else if (key == 40){//down
		
		}
		*/
		
		}, false); //End the event listener
		
		
	function search(k, val){
		var result =false;
		
		for(var i=0; i < k.length; i++){
			if(k[i] == val) result = true;
		}
		
		return result;
	
	}
	
	function remove(k,val){
		for(var i=0; i < k.length; i++){
			if(k[i] == val){
				k.splice(i,1);
				i--;
			}
		}
	
	}

})

