var game = new Phaser.Game(640,960,Phaser.CANVAS);
game.state.add('state0',demo.state0);
game.state.add('state1',demo.state1);
game.state.start('state0');