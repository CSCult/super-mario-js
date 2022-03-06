//Note: to get the coordinates of the the particular element, use pixi.pomle.com
//Properties of Mario- inherit from entity class
class Mario extends Entity {
	constructor(spritesheet, posX, posY, width, height) {
		let img = new Sprite(spritesheet, 650, 1, 18, 21);
		super(img, "mario", posX, posY, width, height);
		this.velX = 5.9;
		this.velY = 0;

		let self = this;
		// States -> standing, walking, or jumping
		this.animFrame = {
			walkRight: {
				frames: [
					// add frames for walking right
					new Sprite(spritesheet, 667, 5, 16, 16),
					new Sprite(spritesheet, 683, 5, 16, 16),
					new Sprite(spritesheet, 699, 5, 16, 16),
				],
				counter: 0,
			},
			walkLeft: {
				frames: [
					// add frames for walking left
					new Sprite(spritesheet, 844, 21, 16, 16),
					new Sprite(spritesheet, 828, 21, 16, 16),
					new Sprite(spritesheet, 812, 21, 16, 16),
				],
				counter: 0,
			},
			// add sprites of standRight, standLeft, jumpRight, jumpLeft, dead
			standRight: new Sprite(spritesheet, 651, 5, 16, 16),
			standLeft: new Sprite(spritesheet, 860, 21, 16, 16),
			jumpRight: new Sprite(spritesheet, 731, 5, 16, 16),
			jumpLeft: new Sprite(spritesheet, 778, 22, 16, 16),
			dead: new Sprite(spritesheet, 748, 5, 16, 16),
		};

		//function of animation for every state
		this.states = {
			walkingAnim(gameObj) {
				if (self.currentDirection == "left") {
					if (gameObj.animFrame % 6 == 0) {
						//walking animation for goint left
						self.sprite =
							self.animFrame.walkLeft.frames[
								self.animFrame.walkLeft.counter
							];
						self.animFrame.walkLeft.counter++;
						if (self.animFrame.walkLeft.counter > 2)
							self.animFrame.walkLeft.counter = 0;
					}
				} else {
					if (gameObj.animFrame % 6 == 0) {
						self.sprite =
							self.animFrame.walkRight.frames[
								self.animFrame.walkRight.counter
							];
						self.animFrame.walkRight.counter++;
						if (self.animFrame.walkRight.counter > 2)
							self.animFrame.walkRight.counter = 0;
					}
				}
			},
			standingAnim() {
				//standing animation- both left and right
				if (self.currentDirection == "left") {
					self.sprite = self.animFrame.standLeft;
				} else {
					self.sprite = self.animFrame.standRight;
				}
			},
			jumpingAnim() {
				//jumping animation- both left and right
				if (self.currentDirection == "left") {
					self.sprite = self.animFrame.jumpLeft;
				} else {
					self.sprite = self.animFrame.jumpRight;
				}
			},
			dead() {
				//dead animation
				self.sprite = self.animFrame.dead;
			},
		};
		this.currentDirection = "right"; //current direction of mario, by default right
		this.currentState = this.states.standingAnim;
	}
}
