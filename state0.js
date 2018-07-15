var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    },
    create: function(){
    },
    update: function(){}
};