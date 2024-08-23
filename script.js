var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


ctx.fillStyle = "#ff0000";
ctx.fillRect(50, 50, 100, 100) ;

ctx.beginPath() ;
ctx.rect(50, 200, 100, 100) ;
ctx.strokeStyle = "000000";
ctx.stroke() ;
ctx.closePath() ;


ctx.beginPath() ;
ctx.arc(250, 100, 50, 0, 2 * Math.PI) ;
ctx.fillStyle = "#00FF00" ;
ctx.fill() ;
ctx.closePath() ;

ctx.beginPath() ;
ctx.arc(250, 250, 50, 0, 2 * Math.PI) ;
ctx.strokeStyle = "#000000" ;
ctx.stroke() ;
ctx.closePath() ;


ctx.beginPath() ;
ctx.arc(250, 380, 50, 0, 1 * Math.PI) ;
ctx.fillStyle = "#000000" ;
ctx.fill() ;
ctx.closePath() ;

ctx.beginPath();
ctx.moveTo(400, 50) ;
ctx.lineTo(350, 150) ;
ctx.lineTo(450, 150) ;
ctx.fillStyle = "#0000FF" ;
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(400, 200) ;
ctx.lineTo(350, 300) ;
ctx.lineTo(450, 300) ;
ctx.lineTo(400, 200) ;
ctx.strokeStyle = "#000000" ;
ctx.stroke();
ctx.closePath();