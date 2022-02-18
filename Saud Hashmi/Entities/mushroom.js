//inherit mushroom class from class entity
class Mushroom extends Entity {
  constructor(tileset, posX, posY, width, height) {
    //create object sprite
    //use super to use base class constructor
    const self = this;
    this.velX = 1.3;
    this.velY = 0;
    //frames
    this.animFrame = {
      //add moving sprite image
    };
    // animation
    this.states = {
      moving: {
        //change the currentdirections when struck to an entity
        movement() {},
      },
    };
    //initialise current direction as right and current state to moving
  }
}
