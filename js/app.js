// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // Loading the image by setting this.sprite to the appropriate image
    //in the image folder (already provided)
    // Setting the Enemy initial location (you need to implement)
    // Setting the Enemy speed (you need to implement)
    // var i = 1;
    this.speed =speed;
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    console.log("----------");
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
// Enemy.x=this.x* dt;
// Enemy.y=this.y* dt;


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y,speed) {
    this.speed =speed;
    this.sprite = 'images/char-boy.png';
    this.x=x;
    this.y=y;
    console.log("----------");
};

Player.prototype.handleInput =function(direction){

if(direction  == 'right'){this.y=70;}
if(direction  == 'left'){this.y=-70;}
if(direction  == 'up'){this.x=70;}
if(direction  == 'down'){this.x=-70;}
};
Player.prototype.update = function() {
  // this.x* dt;
  // this.y* dt;

};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

var enemy = new Enemy(5,50,3);
var enemy1 = new Enemy(5,120,2);
var enemy2 = new Enemy(5,220,1);
// var enemy = new Enemy(-50, 121, 3);
var player = new Player(100, 400, 3);
// player.handleInput();
 var allEnemies = [];
 allEnemies.push(enemy ,enemy1 ,enemy2);
//enemy.render();
//enemy.update();
// render();
// updateEntities();
