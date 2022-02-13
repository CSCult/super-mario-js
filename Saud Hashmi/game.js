//we will print only those methods which are present inside render
const render = {
  //this will render at the beginning
  init(gameObj) {
    //note: by default the tool color is black so we can change that by fill Style
    //change the color of the canvas to #62acff to make it look like sky

    //and now fill the canvas with that color

    //let mario variable to hold the mario from gameobj object

    //initial rendering of our level with help of stock

    //draw our mario on the canvas
    gameObj.tool.drawImage();
  },
  update(gameObj) {
    //what happens when updating the screen frame
    //everything in canvas is paint, so we clear the back step and redraw at front whenever we are moving
    //for sky
    //1.clear at each step, 2. choose the color again, 3. fill the color on the canvas

    //for ground
    gameObj.levelBuilder.render(gameObj);
    //let mario variable to hold the mario from gameobj object

    //create camera from gameobj and draw it with mario, so that camera moves according to mario's movement

    //create a foreach loop for goombas, koopas, particles, coins, mushrooms and draw them
  },

  //create drawEntity function to draw the entities according to the position of camera
  drawEntity(camera, entity, gameObj) {
    let entityEnd = entity.posX + entity.width; //if any entity is going outside of the rendered scene then make sure only the part that should be available on screen is rendered
    let frameWidth = camera.start + camera.width;
    if (entity.posX >= camera.start && entityEnd <= frameWidth) {
      //drawImage
    }
  },

  updateFrame(gameObj) {
    //this function is to update frame according to the camera
    //distance
    //create a variable to get the center of the camera
    let dist = window.innerWidth / 8.5;

    if (center < gameObj.camera.start + 2 * dist) {
      //always true condition
      gameObj.camera.start = Math.max(center - dist, 0); //math.max ensures the frame doesn't gets negative
    }
  },
};

//Most Important- everthing will be done by the object of class Game
class Game {
  //init will create the basic setup of the game
  init() {
    //Preloading the game first i.e. once we have preloaded the sprites, now do this
    preload().then(() => {
      //grab our canvas element from html

      //canvas has default size of 300x150px
      //so change it to the window height and width

      //create a tool to create 2d objects in canvas

      //create an empty object entities which represents all the entities of our game

      //create camera object which has width equal to our window

      //central object which represents the current state of the game
      let gameObj = {
        tool,
        canvas,
        entities,
        animFrame: 0, //for delaying the frame rate of game as it is moving too fast
        levelBuilder: new LevelBuilder(levelOne),
        camera,
        reset: this.reset,
        userControl: true, //user can not control the game once he is dead
      };
      //zoom the canvas tool to your screen size

      //mario object
      let mario = new Mario(spriteSheetImage, 175, 0, 18, 18);
      gameObj.entities.mario = mario; //adding mario to the game
      //create empty arrays for goomba,koopa,bricks,particles,blocks,coins,mushrooms

      //push goombas and koopas by taking their coordinates from spitesheet to the game using foreach loop

      //create empty array for scenery

      render.init(gameObj); //renders the gameObj
      input.init(); //registering the event listener
      this.update(gameObj); //calling update
    });
  }

  //game execution
  update(gameObj) {
    //Gameloop
    function gameloop() {
      input.update(gameObj);
      animation.update(gameObj); //executes animation updation
      movement.update(gameObj);
      physics.update(gameObj); //executes physics updation
      render.update(gameObj);
      gameObj.animFrame++;
      requestAnimationFrame(gameloop); //syncing with every frame- infinite loop
    }
    gameloop();
  }

  //resets the game everytime the page reloads- use location.reload
  reset() {}
}

//create Game object and init it
