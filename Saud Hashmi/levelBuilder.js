class LevelBuilder {
	constructor(level) {
		//make empty arrays for sceneryEntities, bricks and blocks
		this.sceneryEntities = [];

		//for each background entity, create a for each loop
		//which will create a new object, and pass the spritesheet, and all the indexes of coordinates it has from coordinates.js
		//and push it
		level.ground.forEach((gCord) => {
			this.sceneryEntities.push(
				new Ground(tilesetImage, gCord[0], gCord[1], gCord[2], gCord[3])
			);
		});
		//similary do for shrubs, mountains, pipes, smallclouds, mediumclouds, largeclouds, stairs, bricks, coins, mushrooms
		level.shrubs.forEach((shrub) => {
			this.sceneryEntities.push(
				new Shrub(tilesetImage, shrub[0], shrub[1], shrub[2], shrub[3])
			);
		});
		level.mountains.forEach((mountain) => {
			this.sceneryEntities.push(
				new Mountain(
					mountainImage,
					mountain[0],
					mountain[1],
					mountain[2],
					mountain[3]
				)
			);
		});
		level.pipes.forEach((pipe) => {
			this.sceneryEntities.push(
				new Pipe(tilesetImage, pipe[0], pipe[1], pipe[2], pipe[3])
			);
		});
		level.smallClouds.forEach((smallCloud) => {
			this.sceneryEntities.push(
				new SmallCloud(
					cloudImage,
					smallCloud[0],
					smallCloud[1],
					smallCloud[2],
					smallCloud[3]
				)
			);
		});
		level.mediumClouds.forEach((mediumCloud) => {
			this.sceneryEntities.push(
				new MediumCloud(
					cloudImage,
					mediumCloud[0],
					mediumCloud[1],
					mediumCloud[2],
					mediumCloud[3]
				)
			);
		});
		level.largeClouds.forEach((largeCloud) => {
			this.sceneryEntities.push(
				new LargeCloud(
					cloudImage,
					largeCloud[0],
					largeCloud[1],
					largeCloud[2],
					largeCloud[3]
				)
			);
		});
		level.stairs.forEach((brick) => {
			this.sceneryEntities.push(
				new Stair(tilesetImage, brick[0], brick[1], brick[2], brick[3])
			);
		});
		// single entites
		this.sceneryEntities.push(
			new Flag(
				tilesetImage,
				level.flag[0],
				level.flag[1],
				level.flag[2],
				level.flag[3]
			)
		);
		this.sceneryEntities.push(
			new Flagpole(
				tilesetImage,
				level.flagpole[0],
				level.flagpole[1],
				level.flagpole[2],
				level.flagpole[3]
			)
		);
		this.sceneryEntities.push(
			new Castle(
				castleImage,
				level.castle[0],
				level.castle[1],
				level.castle[2],
				level.castle[3]
			)
		);

		// similarly do this for single entites, here we don't need a loop as these entities are present for only once directly push them
		this.sceneryEntities.push(
			new Flag(
				tilesetImage,
				level.flag[0],
				level.flag[1],
				level.flag[2],
				level.flag[3]
			)
		);
		//similarly do for flagpole and castle
	}
	stock(gameObj) {
		//this function will pass all coordinates we just built in sceneryEntities to the gameObj
		this.sceneryEntities.forEach((entity) => {
			gameObj.entities.scenery.push(entity);
		});
	}
	render(gameObj) {
		//this function is for implementing camera
		let camera = gameObj.camera;

		gameObj.entities.scenery.forEach((entity) => {
			// for each entity, render it according to the camera
			// this.drawEntity(entity, camera, gameObj);
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
		});
	}
	drawEntity(entity, camera, gameObj) {
		//this function is for drawing the entities according to the camera
		//if any entity is going outside of the rendered scene then make sure only the part that should be available on screen is rendered
		//frame width should be start of the camera+ width of camera

		if (entity.posX >= camera.start && entityEnd <= frameWidth) {
			//if this condition is met, draw our entity with html canvas
		}
	}
}
