var player,  score, sky, portal, fondo, camara, oil, cuore,
 cursors, scoreTextValue, speedTextValue, textStyle_Key, textStyle_Value;
 var bullet;
var bullets;
var bulletTime = 0;

var Game = {
	preload : function(){
		game.load.spritesheet('sky','./assets/images/cielo.png',315,368);
		game.load.spritesheet('portal','./assets/images/portal.png',33,32);
		game.load.spritesheet('nave','./assets/images/navemov.png', 34, 34);
		game.load.image('cuore','./assets/images/cuore.png', 30, 30);
		game.load.image('oil','./assets/images/oil.png', 30, 30);
		game.load.image('bullet', './assets/images/bullets.png');
	},
	
	create : function() {

		//Setup a Phaser controller for keyboard input.
		cursors = game.input.keyboard.createCursorKeys();
		game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

		//  We're going to be using physics, so enable the Arcade Physics system
		game.physics.startSystem(Phaser.Physics.ARCADE);

		vidas = 5; 
		cristales = 5; 
		
		sky = game.add.tileSprite(0, 0, game.width, game.height, 'sky');

		//sky = game.add.sprite(0, 0, 'sky');
	   //  sky.scale.setTo(2,2);
			
		cuore = game.add.sprite(500,20,'cuore');
		oil = game.add.sprite(300,20,'oil'); 
		
	// The player and its settings
		player = game.add.sprite(game.world.width-50, game.world.height - 50, 'nave');
		
		//  We need to enable physics on the player
		game.physics.arcade.enable(player);
		
		player.scale.setTo(1.5,1.5);

		//  Player physics properties.
		player.body.collideWorldBounds = true;
			//  Our two animations, walking left and right.
		player.animations.add('left', [0, 1], 10, true);
		player.animations.add('right', [2, 3], 10, true);
		player.animations.add('up', [6, 7], 10, true);
		player.animations.add('down', [4, 5], 10, true);
		
		portal = game.add.sprite(100, 100, 'portal');
		portal.scale.setTo(1.5,1.5);
		
		portal.animations.add('animoPortal', [0,1,2,3], 10, true);
		
		sky.animations.add('animoSky', [0,1], 10, true);

	 //  Our ships bullets
	    bullets = game.add.group();
	    bullets.enableBody = true;
	    bullets.physicsBodyType = Phaser.Physics.ARCADE;

	    //  All 40 of them
	    bullets.createMultiple(40, 'bullet');
	    bullets.setAll('anchor.x', 0.5);
	    bullets.setAll('anchor.y', 0.5);
	},

	update : function(){
	
		player.body.velocity.x = 0;
		portal.animations.play('animoPortal', 1000, true, false);
		//sky.animations.play('animoSky',9000,true,false);
		 if (cursors.left.isDown)	{
				player.body.velocity.x = -150;
				player.animations.play('left');
		}	else if (cursors.right.isDown)	{
				player.body.velocity.x = 150;
				player.animations.play('right');
		}	else if (cursors.up.isDown)	{
				player.body.velocity.y = -150;
				player.animations.play('up');
		}	 else if (cursors.down.isDown)	{
				player.body.velocity.y = 150;
				player.animations.play('down');
		}	else {
				player.animations.stop();
				player.body.velocity.y = 0;
				player.body.velocity.x = 0;
		}

		if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
	    {
	        this.fireBullet();
	    }
	},

	fireBullet : function() {

	    if (game.time.now > bulletTime)
	    {
	        bullet = bullets.getFirstExists(false);

	        if (bullet)
	        {
	            bullet.reset(player.body.x + 16, player.body.y + 16);
	            bullet.lifespan = 2000;
	            bullet.rotation = player.rotation;
	            game.physics.arcade.velocityFromRotation(player.rotation, 400, bullet.body.velocity);
	            bulletTime = game.time.now + 50;
	        }
	    }

	}

};