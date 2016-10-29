var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var SHIP_SPEED = 5
var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT);

var startScreen = {
  init: function() {

  },

  preload: function() {
    var imagePath = 'images/ship.png';
    var imageName = 'ship';

    game.load.image(imageName, imagePath);
  },

  create: function() {
    this.createShip();
    this.createControl();
  },

  update: function() {
  },

  createShip: function() {
    var x = 50;
    var y = 50;

    var imageName = 'ship';

    this.sprite = game.add.sprite(x, y, imageName);
    this.sprite.anchor.setTo(0.5);
    this.sprite.angle = 180;
  },

  createControl: function() {
    let context = this

    let keys = game.input.keyboard.addKeys({
      'up': Phaser.KeyCode.W,
      'down': Phaser.KeyCode.S,
      'left': Phaser.KeyCode.A,
      'right': Phaser.KeyCode.D
    })

    keys.up.onHoldCallback = this.turnUp.bind(this);
    keys.down.onHoldCallback = this.turnDown.bind(this);
    keys.left.onHoldCallback = this.turnLeft.bind(this);
    keys.right.onHoldCallback = this.turnRight.bind(this);
  },

  turnLeft: function() {
    this.sprite.x -= SHIP_SPEED;
  },

  turnRight: function() {
    this.sprite.x += SHIP_SPEED;
  },

  turnUp: function() {
    this.sprite.y -= SHIP_SPEED;
  },

  turnDown: function() {
    this.sprite.y += SHIP_SPEED;
  }
}

game.state.add('startScreen', startScreen);
game.state.start('startScreen');
