//This section consists of background templates like how we will define our entities in the background
//make classes for Ground, Pipe, Stair, Shrub, Mountain, Smallcloud,MediumCloud, Largecloud, Flag, Flagpole, Castle which inherits from Entity class
//Ground has been done as an example
class Ground extends Entity {
  //create constructors with following parameters
  constructor(spritesheet, posX, posY, width, height) {
    //create an object of Sprite class
    let img = new Sprite(spritesheet, 0, 0, 16, 16); // <-used to get the coordinates
    //pass a super method in order to give parameters to the base class (Entity) constructor
    super(img, "ground", posX, posY, width, height); // <- used to place in the canvas
  }
}
