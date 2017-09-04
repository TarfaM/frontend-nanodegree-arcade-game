// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.height = 90;
    this.width = 90;
};

//Rest position for Enemies
Enemy.prototype.reset = function() {
    this.x = 0;
};
Enemy.prototype.checkCollisions = function() {

    if (player.x < this.x + this.width &&
        player.x + player.width > this.x &&
        player.y < this.y + this.height &&
        player.height + player.y > this.y) {
        player.reset();

    }
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    var ramdom = Math.random() * 4;
    dt = 3;
    this.x += this.speed + ramdom * dt;
    if (this.x > 500) {
        this.reset();
    }
    this.checkCollisions();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 5;
};

Player.prototype.handleInput = function(direction) {

     if (direction == 'right') {
        this.x = this.x + 101;
    }
    if (direction == 'left') {
        this.x = this.x - 101
    }
     if (direction == 'up') {
        this.y = this.y - 83;
    }
    if (direction == 'down') {
        this.y = this.y +83;
    }
    if (this.x > 410) {
        this.reset();
    }
    if ((this.x < -70)) {
        this.reset();
    }
    if (this.y < -65) {
        this.reset();
    }
    if (this.y > 430) {
        this.reset();
    }
};
Player.prototype.update = function() {
    dt = 10;
    this.x * dt;
    this.y * dt;
};
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 430;
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
//Declaring Variables ..
var enemy = new Enemy(5, 50, 1);
var enemy1 = new Enemy(5, 120, 1);
var enemy2 = new Enemy(5, 220, 4);
var player = new Player(200, 430, 9);
var allEnemies = [];
allEnemies.push(enemy, enemy1, enemy2);
