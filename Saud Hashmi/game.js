//we will print only those methods which are present inside render
const render = {
	//this will render at the beginning
	init(gameObj) {
		gameObj.tool.fillStyle = "#62acff";
		gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight);
		let mario = gameObj.entities.mario;
		gameObj.LevelBuilder.stock(gameObj);
		gameObj.tool.drawImage(
			mario.sprite.img,
			mario.sprite.srcX,
			mario.sprite.srcY,
			mario.sprite.srcW,
			mario.sprite.srcH,
			mario.posX,
			mario.posY,
			mario.width,
			mario.height
		);
	},
	drawEntity(camera, entity, gameObj) {
		let entityEnd = entity.posX + entity.width;
		let frameWidth = camera.start + camera.width;
		if (entity.posX >= camera.start && entityEnd <= frameWidth) {
			gameObj.tool.drawImage(
				entity.sprite.img,
				entity.sprite.srcX,
				entity.sprite.srcY,
				entity.sprite.srcW,
				entity.sprite.srcH,
				entity.posX - camera.start,
				entity.posY,
				entity.width,
				entity.height
			);
		}
	},

	update(gameObj) {
		this.updateFrame(gameObj);
		gameObj.tool.clearRect(0, 0, window.innerWidth, window.innerHeight);
		gameObj.tool.fillStyle = "#68acfc";
		gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight);
		gameObj.LevelBuilder.render(gameObj);

		let mario = gameObj.entities.mario;
		let camera = gameObj.camera;

		this.drawEntity(camera, mario, gameObj);
		gameObj.entities.goombas.forEach((goomba) => {
			this.drawEntity(camera, goomba, gameObj);
		});
	},

	updateFrame(gameObj) {
		let center = gameObj.entities.mario.posX + gameObj.entities.mario.width/2;
		let dist = window.innerWidth / 8.5;

		if (center < gameObj.camera.start + 10 * dist) {
			gameObj.camera.start = Math.max(center - dist, 0);
		}
	},
};

//Most Important- everthing will be done by the object of class Game
class Game {
	//init will create the basic setup of the game
	init() {
		preload().then(() => {
			const canvas = document.querySelector(".board");

			canvas.height = window.innerHeight;
			canvas.width = window.innerWidth;

			const tool = canvas.getContext("2d");

			let entities = {};
			let camera = {
				start: 0,
				width: window.innerWidth,
			}

			let gameObj = {
				tool,
				canvas,
				entities,
				animFrame: 0,
				LevelBuilder: new LevelBuilder(levelOne),
				camera,
				reset: this.reset,
				userControl: true,
			};

			tool.scale(3.06,3.06);

			let mario = new Mario(spritesheetImage, 40, 0, 15, 15);
			gameObj.entities.mario = mario; //adding mario to the game

			gameObj.entities.scenery = [];
			gameObj.entities.goombas = [];
			levelOne.goombas.forEach((gCord) => {
				gameObj.entities.goombas.push(
					new Goomba(spritesheetImage, gCord[0], gCord[1], gCord[2], gCord[3])
				);
			});

			render.init(gameObj); //renders the gameObj
			input.init();
			this.update(gameObj); //calling update
		});
	}

	//game execution
	update(gameObj) {
		//Gameloop
		function gameloop() {
			input.update(gameObj);
			animation.update(gameObj);
			movement.update(gameObj);
			physics.update(gameObj);
			render.update(gameObj);
			requestAnimationFrame(gameloop); //syncing with every frame- infinite loop
			gameObj.animFrame++;
		}
		gameloop();
	}

	//resets the game everytime the page reloads- use location.reload
	reset() {
		location.reload();
	}
}

//create Game object and init it
const game = new Game();
game.init();
