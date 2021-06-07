canvas=document.getElementById("MyCanvas");
color="red";
color1="pink";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=2;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(300,100,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=2;
ctx.arc(200,100,40,0,2*Math.PI);
ctx.stroke();