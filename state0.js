var demo = {},centerX = 640 / 2,centerY = 960/2;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('Bot','assets/sprites/Bot.png');
        game.load.image('BG','assets/sprites/Background.png');
        game.load.image('Player','assets/sprites/Player.png');
        game.load.image('Bomb','assets/sprites/bomb small.png');
    },
    create: function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.add.sprite(0,0,'BG');
    var bot = game.add.sprite(centerX,300,'Bot');
    bot.anchor.setTo(0.5,0.5);
    var player = game.add.sprite(centerX,890,'Player');
    player.anchor.setTo(0.5,0.5);
    var bomb = game.add.sprite(centerX,centerY,'Bomb');
    bomb.anchor.setTo(0.5,0.5);
    },
    update: function(){}
};