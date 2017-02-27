var canv= document.getElementById("area");
var ctx= canv.getContext("2d"); 
var x=Math.random() * canv.width;
var y=Math.random() * canv.height;
var requestID;
var size=0;
var grow=true;

var clearCanv = function(){
    ctx.clearRect(0,0,canv.width,canv.height);
}

var growAnimate = function (){
	window.cancelAnimationFrame( requestID );
		
		var growCircle = function(){
			clearCanv();
			ctx.arc(canv.width/2,canv.height/2,size,0,2*Math.PI);
			ctx.fill();
			size++;
			if (size<canv.width/2){
				requestID = window.requestAnimationFrame(growCircle)
			}
			else{
				requestID = window.requestAnimationFrame(shrinkCircle)
			}
		}
		
		var shrinkCircle = function(){
			clearCanv();
			ctx.arc(canv.width/2,canv.height/2,size,0,2*Math.PI);
			ctx.fill();
			size--; 
			if (size>0){
				requestID = window.requestAnimationFrame(shrinkCircle)
			}
			else{
				requestID = window.requestAnimationFrame(growCircle)
			}
		}
	
	requestID= window.requestAnimationFrame(growCircle);
}

var dvdAnimate= function(){
	window.cancelAnimationFrame(requestID)
	
	xVel=1;
	yVel=1;
	
	var moveDVD = function(){
		window.cancelAnimationFrame(requestID);
		clearCanv();
		ctx.fillRect(x,y,50,50);
		ctx.fill();
		if (x >= canv.width - 50 || x<=0){
			xVel *= -1;
		}
		if (y >= canv.height - 50|| y<=0){
			yVel *= -1;
		}
		x += xVel;
		y += yVel;
		requestID = window.requestAnimationFrame(moveDVD);
		console.log(x,y)
	}
	requestID = window.requestAnimationFrame(moveDVD);
}

var stop = function(){
	window.cancelAnimationFrame(requestID);
}
