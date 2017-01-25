var panel,emitter;
var Menu = {
	preload: function(){
		game.load.image('inicio','./assets/images/pressStarButton.png');
		game.load.spritesheet('panel','./assets/images/panel.png',316,99);
		game.load.image('star','./assets/images/star.png');
		game.load.image('titulo','./assets/images/titulo.png');
	},
	
	create: function(){
		
		emitter = self.game.add.emitter(self.game.world.centerX, 0, 200);//X, Y, numero de particulayY
		emitter.alpha = 0.6;//Controlar la transparencia de las particulas
		emitter.width = self.game.world.width;//Tamao de longitud del emisor
		emitter.makeParticles('star'); //Seleccionamos la imagen cargada para cada particula
		emitter.minParticleScale = 0.2;//Escala minima de las particulas
		emitter.maxParticleScale = 0.7;//Escala maxima de las particulas
		emitter.setYSpeed(100, 300);//Valor minimo y maximo de este rango
		emitter.setXSpeed(0, 0);//Valor minimo y maximo de este rango
		emitter.gravity = 0;//Podemos configurarle la gravedad
		emitter.minRotation = 0;//Rotacion minima
		emitter.maxRotation = 0;//Rotacion maxima
		emitter.start(false, 7000, 100, 0);

		panel = game.add.sprite(0,game.world.height-200,'panel');
		panel.scale.setTo(2,2);
		
		panel.animations.add('animoP',[0,1],10,true);
	//	this.add.button(0,0,'jfdk',this.StarGame,this);
		
		this.add.button(160 ,game.world.height/2 -50 ,'inicio',this.StarGame,this).scale.setTo(2,2);
		
		game.add.sprite(100,30,'titulo').scale.setTo(2	,1.5);
	},
	
	
	update : function (){

		panel.animations.play('animoP',1000,true,false);
	},
	
	StarGame : function(){
		this.state.start('Game');
	}
}