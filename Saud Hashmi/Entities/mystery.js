//inherit block from entity
class Block extends Entity {
  //create a constructor
  constructor(content, tileset, posX, posY, width, height) {
    //create object sprite
    //use super to use base class constructor
    this.content = content;
    let self = this;
    this.animFrame = {
      //add sprites for empty and full blocks
    };
    this.states = {
      fullAnim() {
        //add animation for full block
      },
      emptyAnim() {
        //add animation for empty block
      },
    };
    //initialise currentState this with fullanim
  }
  createCoin(gameObj) {
    let coin = new Coin();
    //add spritesheet, posX, posY, velX, vely;
    gameObj.entities.coins.push(coin);
    setTimeout(() => {
      //take index and splice coin's image
    }, 300);
  }
  createMushroom(gameObj) {
    let mushroom = new Mushroom();
    //add spritesheet, posX, posY, velX, vely;
    gameObj.entities.mushrooms.push(mushroom);
  }
}
