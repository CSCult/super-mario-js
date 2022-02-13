class LevelBuilder {
  constructor(level) {
    //make empty arrays for sceneryEntities, bricks and blocks

    //for each background entity, create a for each loop
    //which will create a new object, and pass the spritesheet, and all the indexes of coordinates it has from coordinates.js
    //and push it
    level.ground.forEach((gCord) => {
      this.sceneryEntities.push(
        new Ground(tileSetImage, gCord[0], gCord[1], gCord[2], gCord[3])
      );
    });
    //similary do for shrubs, mountains, pipes, smallclouds, mediumclouds, largeclouds, stairs, bricks, coins, mushrooms

    // similarly do this for single entites, here we don't need a loop as these entities are present for only once directly push them
    this.sceneryEntities.push(
      new Flag(
        tileSetImage,
        level.flag[0],
        level.flag[1],
        level.flag[2],
        level.flag[3]
      )
    );
    //similarly do for flagpole and castle
  }
  stock(gameObj) {
    //this function will pass all coordinates we just built in sceneryEntities to the gameObj
    this.sceneryEntities.forEach((entity) => {
      gameObj.entities.scenery.push(entity);
    });
  }
  render(gameObj) {
    //this function is for implementing camera
    let camera = gameObj.camera;
    gameObj.entities.scenery.forEach((entity) => {
      // for each entity, render it according to the camera
      this.drawEntity(entity, camera, gameObj);
    });
  }
  drawEntity(entity, camera, gameObj) {
    //this function is for drawing the entities according to the camera
    //if any entity is going outside of the rendered scene then make sure only the part that should be available on screen is rendered
    //frame width should be start of the camera+ width of camera

    if (entity.posX >= camera.start && entityEnd <= frameWidth) {
      //if this condition is met, draw our entity with html canvas
    }
  }
}
