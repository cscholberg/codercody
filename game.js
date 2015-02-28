(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();
var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	width = 1000,
	height = 400,
	player = {
		x : width/2,
		y : height,
		width : 5,
		height : 5,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping : false,
		flying : false
	},
	keys = [],
	friction = .8,
	gravity = 0.8;

	canvas.width = width;
	canvas.height = height;

	function groundMovement(){
		   
	   if (keys[32]) {
    		//space
		  if(!player.jumping){
		   player.jumping = true;
		   player.velY = -player.speed*2;
		  }
		}
		
		if (keys[38]) {
			//up
			
			player.flying = true;
				
		}

		if(keys[40]) {
			//down
		}

	   if (keys[39]) {
	       // right arrow
	       if (player.velX < player.speed) {                         
	           player.velX++;                  
	       }          
	   }          
	   if (keys[37]) {                 
	        // left arrow                  
	       if (player.velX > -player.speed) {
	           player.velX--;
	       }
	   }

	  player.velX *= friction;
	  player.velY += gravity;

	  player.x += player.velX;
	  player.y += player.velY;

	}

	function flyingMovement(){
		if (keys[38]) {
			//up
				player.velY -= 1.5;
	           	
		}

		if(keys[40]) {
			//down
			player.flying = true;
			player.velY += 1;
		}

	   if (keys[39]) {
	       // right arrow
	       if (player.velX < player.speed) {                         
	           player.velX++;                  
	       }          
	   }          
	   if (keys[37]) {                 
	        // left arrow                  
	       if (player.velX > -player.speed) {
	           player.velX--;
	       }
	   }

	  player.velX *= friction;
	  player.velY += gravity;

	  player.x += player.velX;
	  player.y += player.velY;
	}

	function update(){
		// on ground
		if(!player.flying){
			groundMovement();
		}
		else { 
			flyingMovement();
		}
if (player.x >= width-player.width) {
        player.x = width-player.width;
    } else if (player.x <= 0) {         
        player.x = 0;     
    }    
  
    if(player.y >= height-player.height){
        player.y = height - player.height;
        player.jumping = false;
    }

		//draw our player
		ctx.clearRect(0,0,width,height);
		
		//head
		ctx.beginPath();
		ctx.arc(player.x, player.y - 25, player.width,0,2*Math.PI);
		ctx.stroke();
		
		//body
		ctx.beginPath();
		ctx.moveTo(player.x, player.y - 20);
		ctx.lineTo(player.x, player.y - 5);
		ctx.stroke();

		//left arm
		ctx.beginPath();
		ctx.moveTo(player.x, player.y - 15);
		ctx.lineTo(player.x + 10, player.y - 20);
		ctx.stroke();

		//right arm
		ctx.beginPath();
		ctx.moveTo(player.x, player.y - 15);
		ctx.lineTo(player.x - 10, player.y - 20);
		ctx.stroke();

		//left leg
		ctx.beginPath();
		ctx.moveTo(player.x, player.y - 5);
		ctx.lineTo(player.x - 8, player.y + 5);
		ctx.stroke();

		//right leg
		ctx.beginPath();
		ctx.moveTo(player.x, player.y - 5);
		ctx.lineTo(player.x + 8, player.y + 5);
		ctx.stroke();

		//run through the loop again
		requestAnimationFrame(update);
	}

	window.addEventListener("load", function(){
		update();
	});

	document.body.addEventListener("keydown", function(e) {
		keys[e.keyCode] = true;
	});

	document.body.addEventListener('keyup', function(e) {
		keys[e.keyCode] = false;
	});
