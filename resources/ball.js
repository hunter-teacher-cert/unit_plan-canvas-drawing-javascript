var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height; 

var circle = function(x,y, radius, fillCircle){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle){
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

// Ball constructor 
var Ball = function(){
    this.x = width / 2;
    this.y = height / 2; 
    this.xSpeed = 5; 
    this.ySpeed = 0; 
}


Ball.prototype.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0){
        this.x = width;
    } else if (this.x > width) {
        this.x = 0;
    }

    if (this.y < 0){
        this.y = height;
    } else if (this.y > height) {
        this.y = 0; 
    }
}

Ball.prototype.draw = function() {
    circle(this.x, this.y, 10, true);
}

Ball.prototype.setDirection = function(direction){
    if (direction === "up") {
        this.xSpeed = 0; 
        this.ySpeed = -5;
    } else if (direction === "down") {
        this.xSpeed = 0; 
        this.ySpeed = 5;
    } else if (direction === "left") {
        this.xSpeed = -5; 
        this.ySpeed = 0;
    } else if (direction === "right") {
        this.xSpeed = 5;
        this.ySpeed = 0; 
    } else if (direction === "stop") {
        this.xSpeed = 0; 
        this.ySpeed = 0; 
    }
}

var ball = new Ball();

var keyActions = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
}

var x = document.getElementsByTagName("BODY")[0];

x.addEventListener('keydown', function(event){
    var direction = keyActions[event.keyCode];
    ball.setDirection(direction);
})

function getWidth(x){
    if (x == width){
        ball.setDirection("left");
    } else if (x == 0){
        ball.setDirection("right");
    }
}

function getHeight(x){
    if (x == height){
        ball.setDirection("up");
    } else if (x == 0){
        ball.setDirection("down");
    }
}

setInterval(function() {
    ctx.clearRect(0,0, width, height);

    ball.draw();
    ball.move();

    // if (ball.x == 200){
    //     getWidth(200);
    // } else if (ball.x == 0){
    //     getWidth(0);
    // } 
    // if (ball.y == 0){
    //     getHeight(0);
    // } else if (ball.y == 200){
    //     getHeight(200);
    // }

    ctx.strokeRect(0, 0, width, height);

}, 90)