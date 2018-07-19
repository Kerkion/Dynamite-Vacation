var demo = {},centerX = 640 / 2,centerY = 960/2,bot,player,bomb,speed = 200;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        //load assets
        game.load.image('Bot','assets/sprites/Bot.png');
        game.load.image('BG','assets/sprites/Background.png');
        game.load.image('Player','assets/sprites/Player.png');
        game.load.image('Bomb','assets/sprites/bomb small.png');
    },

    create: function(){

    game.physics.startSystem(Phaser.Physics.ARCADE); 

    //scale game and alighn it
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;


    //adding background
    game.add.sprite(0,0,'BG');
    

    //adding bot and setting anchor
    bot = game.add.sprite(centerX,300,'Bot');
    bot.anchor.setTo(0.5,0.5);
    //enable physics
    game.physics.enable(bot,Phaser.Physics.ARCADE);
    //not checking for left and right collisions
    bot.body.checkCollision.left = false;
    bot.body.checkCollision.right = false;
    //not movable object
    bot.body.immovable = true;
    

    //adding Player and setting anchor
    player = game.add.sprite(centerX,890,'Player');
    player.anchor.setTo(0.5,0.5);
    //enable physics
    game.physics.enable(player,Phaser.Physics.ARCADE);
    //not checking for left and right collisions
    player.body.checkCollision.left = false;
    player.body.checkCollision.right = false;
    //not movable object
    player.body.immovable = true;



    //adding bomb and setting anchor
    bomb = game.add.sprite(centerX,centerY,'Bomb');
    bomb.anchor.setTo(0.5,0.5);
    //enable physics
    game.physics.enable(bomb,Phaser.Physics.ARCADE);
    //not checking for left and right collisions
    bomb.body.checkCollision.left = false;
    bomb.body.checkCollision.right = false;
    //adding velocity
    bomb.body.velocity.y = speed; 
    
    },
    update: function(){

        //checking for collision player and bomb
        game.physics.arcade.overlap(player,bomb,handleCollision,null,this);
        //checking for collision player and bomb
        game.physics.arcade.overlap(bot,bomb,handleCollision1,null,this);

    },  
};

function handleCollision(player,bomb){
    bomb.body.velocity.y = -speed;
}
function handleCollision1(bot,bomb){
    bomb.body.velocity.y = speed;
}