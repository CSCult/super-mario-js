//Note: to get the coordinates of the the particular element, use pixi.pomle.com
//Properties of Mario- inherit from entity class
class Mario extends Entity {
  constructor(spritesheet, posX, posY, width, height) {
    //create object sprite
    //use super to use base class constructor

    this.velX = 2.5; //at once, it will go this much position right or left
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
          //add frames for walking left
        ],
        counter: 0,
      },
      //add sprites of standRight, standleft, jumpRight, jumpLeft and dead
    };
    //function of animation for every state
    this.states = {
      walkingAnim(gameObj) {
        if (self.currentDirection == "left") {
          //walking animation for goint left
        } else {
          if (gameObj.animFrame % 6 == 0) {
            //walking animation for going right
          }
        }
      },
      standingAnim() {
        //standing animation- both left and right
      },
      jumpingAnim() {
        //jumping animation- both left and right
      },
      dead() {
        //dead animation
      },
    };
    this.currentDirection = "right"; //current direction of mario, by default right
    this.currentState = this.states.standingAnim;
  }
}
