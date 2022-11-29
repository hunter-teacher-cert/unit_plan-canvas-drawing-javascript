var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var size = 0;

setInterval(function(){
    ctx.clearRect(0,0,200,200);
    ctx.fillRect(0,0,size,size);

    size++;
    if (size > 200){
        size = 0;
    }

}, 30);