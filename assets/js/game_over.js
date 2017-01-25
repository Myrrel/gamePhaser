var Game_Over = {
	preload : function() {
//Load the needed image for this game screen.
		game.load.image('gameover', './assets/images/gameover.png');
	},
	
	create : function() {

		this.add.button(0, 0, 'gameover', this.startGame, this).scale.setTo(2,2);

		//game.add.text(235, 350, "LASTSCORE", {font : "bold16pxsans-serif", fill : "#46c0f9", align:"center"});
		//game.add.text(350, 348, score.toString(), {font : "bold20pxsans-serif", fill : "#fff", align : "center"});
	},
	
	startGame : function() {
//Change the state back to Game.
		this.state.start('Menu');
	}
};