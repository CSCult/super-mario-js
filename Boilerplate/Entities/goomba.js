//inherit coin class from class entity
class Goomba extends Entity {
  //create a constructor
  constructor(spritesheet, posX, posY, width, height) {
    //create object sprite
    //use super to use base class constructor

    this.velX = 1.1; //at once, it will go this much position right or left
    this.velY = 0;
    let self = this;
    //frames
    this.animFrame = {
      walking: {
        frames: [
          //add the two frames
        ],
        counter: 0,
      },
      //add squashed frame from the spritesheet
    };
    //animation
    this.states = {
      walkingAnim: {
        animation(gameObj) {
          if (gameObj.animFrame % 6 == 0) {
          }
        },
        movement(gameObj) {
          //change the currentdirections when struck to an entity
        },
      },
      squashed: {
        //make the velocity 0 when squashed
        movement() {},
        //add squashed animation from spritesheet
        animation() {},
      },
    };
    this.currentDirection = "left";
    this.currentState = this.states.walkingAnim;
  }
}
