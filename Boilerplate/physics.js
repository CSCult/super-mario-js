let physics = {
  update(gameObj) {
    //updating the game based on the physics we are applying later
    this.gravity(gameObj.entities.mario); //updates mario
    //apply gravity to each indexes of goomba, koopa, particle, mushroom

    //call all the methods we are applying
    this.staticEntityCol(gameObj);
    this.entityMarioCol(gameObj);
    this.bgEntityCollision(gameObj);
    this.marioFallingCheck(gameObj);
    this.gameEndCheck(gameObj);
  },
  //gravity
  gravity(entity) {
    entity.velY += 1.1; //apply velocity of 1.1 to velY for falling down
    entity.posY += entity.velY; //change positionY acc to velY
  },
  //checks collision to bricks and blocks and handles direction of mushrooms according to that
  staticEntityCol(gameObj) {},

  //collision of mario to all the other entities of the game
  entityMarioCol(gameObj) {
    let { goombas, mario, koopas, bricks, blocks, mushrooms } =
      gameObj.entities;
    //apply for each loop and checkRectCollision of mario and entity and then handle its collision
  },

  //handles collision between mario and entity
  handleCollision(mario, entity, gameObj) {
    //check from which direction collision happened with the entity
    if (entity.type == "goomba" || entity.type == "koopa") {
      //collision from left
      if (mario.posX > entity.posX && mario.posY == 175.2) {
      }
      //collision from  right
      if (mario.posX < entity.posX && mario.posY == 175.2) {
      }
      //collision from top - death of enemy
    }
  },

  //enemy death physics
  enemyDeath(gameObj, entity, mario) {
    if (entity.type == "goomba") {
      //squashed
    } else if (entity.type == "koopa") {
      //first increase velocity and then fall
    }
    setTimeout(() => {
      if (entity.type == "goomba") {
        //find the index to which number of element, mario has squashed
        //we have squashed so we need to remove the enemy
      } else if (entity.type == "koopa") {
        //find the index to which number of element, mario has squashed
        //we have squashed so we need to remove the enemy
      }
    }, 200);
  },

  //koopa hiding physics
  koopaHide(entity, mario) {
    //change currentState
    //change posX according to currentDirection
  },
  koopaSlide(entity, mario) {
    //change currentState
    //koopa will slide according to direction of mario so that mario gets enough time to jump again
    //change posX according to currentDirection
  },

  //mario death physics
  marioDeath(gameObj, mario) {
    //make velX 0, velY negative so that it can fall and change the state to dead

    //stop user from controlling the game once he is dead
    setTimeout(() => {
      //after collision, restart the game after 3 sec
    }, 3000);
  },

  //collision with entities
  bgEntityCollision(gameObj) {},

  bgCollision(entity, gameObj) {
    let scenery = gameObj.entities.scenery;
    scenery.forEach((scene) => {
      //check the collision of mario with scenery items and do things accordingly
      //like collision with pipe should stop mario and it could move only if it jumps
    });
  },

  checkRectCollision(entity1, entity2) {
    //rectangle collision concept- important!!
  },
  handleDirec(scene, entity) {
    //handle direction method for mario
    //bottom
    if (
      entity.posY > scene.posY &&
      entity.posX + entity.width > scene.posX &&
      scene.posX + scene.posY > entity.posX &&
      entity.velY < 0
    ) {
    }
    if (entity.posX < scene.posX && entity.posY >= scene.posY) {
      // left
    }
    // right
    if (entity.posX > scene.posX && entity.posY >= scene.posY) {
    }
    //top
    if (
      entity.posY < scene.posY &&
      entity.posX + entity.width > scene.posX &&
      scene.posX + scene.posY > entity.posX &&
      entity.velY >= 0
    ) {
    }
  },

  //checking if mario has fallen in a space
  marioFallingCheck(gameObj) {},

  //checking if game has ended
  gameEndCheck(gameObj) {},
};
