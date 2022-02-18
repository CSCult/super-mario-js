//inherit coin class from class entity
class Coin extends Entity {
  //create a constructor
  constructor(tileset, posX, posY, width, height) {
    //create object sprite
    //use super to use base class constructor

    const self = this;
    this.animFrames = {
      spin: {
        frames: [
          //add all the four frames from the spritesheet
        ],
        currentFrame: 0, //initialise
      },
    };
    this.states = {
      spinning: {
        animation(gameObj) {
          //ensure coin doesn't flips for more than 3 times
          if (gameObj.animFrames % 3 == 0) {
          }
        },
        movement() {
          //add velocity to the position for movement
        },
      },
    };
    //initialise currentstae to spinning

    this.velY = -0.7;
  }
}
