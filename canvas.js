var canv= document.getElementById("area");
var ctx= canv.getContext("2d"); 
var x=canv.width/2;
var y=canv.height/2;

var clear= function(){
    ctx.clearRect(0,0,500,500);
}

var grow = function(){
    var size= 0;
    if size = canv.width/2{
	clear;
	ctx.arc(canv.width/2,canv.height/2,size,0,2*Math.PI);
	size++;
    }
    else{
	clear;
	ctx.arc(canv.width/2,canv.height/2,size,0,2*Math.PI);
	size--; 
    }

}

