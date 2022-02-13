//Note: to get the coordinates of the the particular element, use pixi.pomle.com
//Properties of Koopa- inherit from entity class
class Koopa extends Entity {
  constructor(spritesheet, posX, posY, width, height) {
    //create object sprite
    //use super to use base class constructor

    this.velX = 0.5; //at once, it will go this much position right or left
    this.velY = 0;
    let self = this;
    //States-> standing, walking or jumping- every state has frame and it can be either towards right or left
    this.animFrame = {
      walkRight: {
        frames: [
          // add frames for walking right
        ],
        counter: 0,
      },
      walkLeft: {
        frames: [
          // add frames for walking left
        ],
        counter: 0,
      },
      //add sprite to key hiding for hiding animation
    };
    //function of animation for every state
    this.states = {
      walkingAnim: {
        animation(gameObj) {
          if (self.currentDirection == "left") {
            //walking animation for goint left
          } else {
            //walking animation for going right
          }
        },
        movement() {
          //change currentDirection when it strucks an entity
        },
      },

      hiding: {
        movement() {
          //while hiding change the velX
        },
        animation() {
          //change the animation for hiding
        },
      },
      sliding: {
        movement() {
          //change the movement for sliding by changing the velX
        },
        animation() {
          //add same animation as hiding
        },
      },
    };
    this.currentDirection = "right"; //current direction of mario, by default right
    this.currentState = this.states.walkingAnim;
  }
}
