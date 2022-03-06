let physics = {
	update(gameObj) {
		this.gravity(gameObj.entities.mario); //updates mario
		gameObj.entities.goombas.forEach((goomba) => {
			this.gravity(goomba);
		});
		this.checkCollision(gameObj.entities.mario); //checks collision
		this.entityMarioCol(gameObj);
		this.bgEntityCollision(gameObj);
		this.marioFallingCheck(gameObj);
	},
	gravity(entity) {
		entity.velY += 1.1; //acceleration
		entity.posY += entity.velY; //position change
	},
	checkCollision(entity) {
		if (entity.posY + entity.height >= 200 && entity.velY > 0) {
			entity.posY = 200;
			entity.velY = 0;
			entity.currentState = entity.states.standingAnim;
		}
	},
	bgCollision(entity, gameObj) {
		let scenery = gameObj.entities.scenery;
		scenery.forEach((scene) => {
			if (this.checkRectCollision(scene, entity)) {
				// console.log(scene)
				if (scene.type == "pipe" || scene.type == "stair") {
					this.handleDirec(scene, entity);
				} else if (scene.type == "ground") {
					if (
						entity.posY < scene.posY &&
						entity.posX + entity.width > scene.posX &&
						scene.posX + scene.posY > entity.posX &&
						entity.velY >= 0
					) {
						entity.currentState = entity.states.standingAnim;
						entity.posY = scene.posY - entity.height - 1;
						entity.velY = 1.1;
					}
				}
				// check
			}
		});
	},
	bgEntityCollision(gameObj) {
		let mario = gameObj.entities.mario;
		let goombas = gameObj.entities.goombas;
		this.bgCollision(mario, gameObj);
		goombas.forEach((goomba) => {
			this.bgCollision(goomba, gameObj);
		});
	},
	entityMarioCol(gameObj) {
		let { goombas, mario } = gameObj.entities;
		goombas.forEach((goomba) => {
			if (this.checkRectCollision(goomba, mario)) {
				this.handleCollision(mario, goomba, gameObj);
			}
		});
	},
	checkRectCollision(scene, mario) {
		//x->r2>l1&&l2<r1
		let l1 = scene.posX;
		let l2 = mario.posX;
		let r1 = scene.posX + scene.width;
		let r2 = mario.posX + mario.width;
		let t1 = scene.posY + scene.height;
		let t2 = mario.posY + mario.height;
		let b1 = scene.posY;
		let b2 = mario.posY;
		// y-> t2>b1&&t1>b2
		if (r2 > l1 && l2 < r1 && t2 > b1 && t1 > b2) {
			return true;
		}
	},
	handleDirec(scene, entity) {
		// left
		if (entity.posX < scene.posX && entity.posY >= scene.posY) {
			entity.posX = scene.posX - entity.width;
			if (entity.type == "goomba") {
				entity.currentDirection =
					entity.currentDirection == "left" ? "right" : "left";
			}
		}
		// right
		if (entity.posX > scene.posX && entity.posY >= scene.posY) {
			entity.posX = scene.posX + scene.width;
			if (entity.type == "goomba") {
				entity.currentDirection =
					entity.currentDirection == "left" ? "right" : "left";
			}
		}
		//top
		if (
			entity.posY < scene.posY &&
			entity.posX + entity.width > scene.posX &&
			scene.posX + scene.posY > entity.posX &&
			entity.velY >= 0
		) {
			entity.currentState = entity.states.standingAnim;
			entity.posY = scene.posY - entity.height - 1;
			entity.velY = 0;
		}
	},
	handleCollision(mario, entity, gameObj) {
		if (entity.type == "goomba") {
			// collision from left
			if (mario.posX > entity.posX && mario.posY == 180) {
				mario.posX = entity.posX - mario.width;
				if (entity.currentState != entity.states.squashed) {
					this.marioDeath(gameObj, mario);
				}
			}

			// collision from right
			if (mario.posX < entity.posX && mario.posY == 180) {
				mario.posX = entity.posX + mario.width;
				if (entity.currentState != entity.states.squashed) {
					this.marioDeath(gameObj, mario);
				}
			}

			// collision from top - death of enemy
			// if (
			// 	//add later
			// 	mario.posY < entity.posY &&
			// 	mario.posX < entity.posX + entity.width &&
			// 	mario.posX + mario.width > entity.posX
			// ) {
			// 	if (
			// 		entity.currentState != entity.states.squashed &&
			// 		mario.pointer != "dead"
			// 	) {
			// 		this.enemyDeath(gameObj, entity, mario);
			// 	}
			// }
		}
	},
	marioFallingCheck(gameObj) {
		if (gameObj.entities.mario.posY >= 200) {
			// alert('Game over');
			gameObj.entities.mario.velX = 0;
			gameObj.entities.mario.velY = 0;
			gameObj.reset();
		}
	},
	marioDeath(gameObj, mario) {
		mario.velX = 0;
		mario.currentState = mario.states.dead;
		mario.velY = -14;
		mario.pointer = "dead";
		gameObj.userControl = false; //after introducing userCOntrol
		setTimeout(() => {
			gameObj.reset(); //after collision, restart the game after 3 sec
		}, 3000);
	},
	enemyDeath(gameObj, entity, mario) {
		entity.pointer = "squashed";
		entity.currentState = entity.states.squashed;
		setTimeout(() => {
			let idx = gameObj.entities.goombas.indexOf(entity); //finding the index to which number of element, mario has squashed
			delete gameObj.entities.goombas[idx]; //we have squashed so we need to remove the enemy
		}, 200);
	},
};
