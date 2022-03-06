//This section consists of background templates like how we will define our entities in the background
//make classes for Ground, Pipe, Stair, Shrub, Mountain, Smallcloud,MediumCloud, Largecloud, Flag, Flagpole, Castle which inherits from Entity class
//Ground has been done as an example
class Ground extends Entity {
	//create constructors with following parameters
	constructor(spritesheet, xPos, yPos, width, height) {
		let img = new Sprite(spritesheet, 0, 0, 16, 16); // <-used to get the coordinates
		super(img, "ground", xPos, yPos, width, height); // <- used to place in the canvas
	}
}

class Pipe extends Entity {
	//create constructors with following parameters
	constructor(spritesheet, xPos, yPos, width, height) {
		let img = new Sprite(spritesheet, 0, 180, 35, 35); // <-used to get the coordinates
		super(img, "pipe", xPos, yPos, width, height); // <- used to place in the canvas
	}
}

class Stair extends Entity {
	//create constructors with following parameters
	constructor(spritesheet, xPos, yPos, width, height) {
		let img = new Sprite(spritesheet, 0, 18, 18, 18); // <-used to get the coordinates
		super(img, "stair", xPos, yPos, width, height); // <- used to place in the canvas
	}
}

class Shrub extends Entity {
	constructor(tileset, xPos, yPos, width, height) {
		const sprite = new Sprite(tileset, 198.5, 162.5, 53, 17);
		super(sprite, "shrub", xPos, yPos, width, height);
	}
}
class Mountain extends Entity {
	constructor(tileset, xPos, yPos, width, height) {
		const sprite = new Sprite(tileset, 0, 0, 90, 39);

		super(sprite, "mountain", xPos, yPos, width, height);
	}
}
class SmallCloud extends Entity {
	constructor(tileset, xPos, yPos, width, height) {
		const sprite = new Sprite(tileset, 64.5, 0, 33, 24);

		super(sprite, "cloud", xPos, yPos, width, height);
	}
}
class MediumCloud extends Entity {
	constructor(tileset, xPos, yPos, width, height) {
		const sprite = new Sprite(tileset, 0, 24.5, 48, 24);

		super(sprite, "cloud", xPos, yPos, width, height);
	}
}
class LargeCloud extends Entity {
	constructor(tileset, xPos, yPos, width, height) {
		const sprite = new Sprite(tileset, 0, 0, 64, 24);

		super(sprite, "cloud", xPos, yPos, width, height);
	}
}
class Flag extends Entity {
	constructor(tileset, xPos, yPos, width, height) {
		const sprite = new Sprite(tileset, 289, 153, 16, 27);

		super(sprite, "flag", xPos, yPos, width, height);
	}
}
class Flagpole extends Entity {
	constructor(tileset, xPos, yPos, width, height) {
		const sprite = new Sprite(tileset, 289, 163, 16, 18);

		super(sprite, "flag", xPos, yPos, width, height);
	}
}
class Castle extends Entity {
	constructor(tileset, xPos, yPos, width, height) {
		const sprite = new Sprite(tileset, 0, 0, 80, 80);

		super(sprite, "flag", xPos, yPos, width, height);
	}
}
