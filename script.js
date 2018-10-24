"use strict";
c.height = window.innerHeight;
c.width = window.innerWidth;

let ctx = c.getContext("2d");

let letters ="01xABCDEF2345679abcdef";

let fsize = 25;
let columns = c.width/fsize; 
let arr = [];
for(let x = 0; x < columns; x++)
	arr[x] = 1; 
	
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(27, 27, 27, 0.05)";
	ctx.fill();
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = "white";	
	ctx.font = fsize + "px arial";
	//looping over arr
	for(let i = 0; i < arr.length; i++)
	{
		let text = letters[Math.floor(Math.random()*letters.length)];
		ctx.fillText(text, i*fsize, arr[i]*fsize);
		if(arr[i]*fsize > c.height && Math.random() > 0.975)
			arr[i] = 0;
		arr[i]++;
	}
}

setInterval(draw, 33);
let mylet;

function myFunction() {
    mylet = setTimeout(transition, 10000);
}

function transition() {
  document.getElementById("c").style.display = "none";
  document.getElementById("container").style.display = "block";
}


