//for taking inputs from
let input = {
  down: {}, //if key is pressed for once
  pressed: {}, //if key is holded for eg. for space bar, if we hold space, it will jump again and again
  init() {
    //setting the event listeners
    window.addEventListener("keydown", (e) => {
      //when key is pressed
      // mark down and pressed as true
    }); //e function describes our event. e is an object which describes which key we have pressed
    window.addEventListener("keyup", (e) => {
      //when key is not pressed anymore
      //deleting down and pressed when the user has left the key
    }); //e function describes our event. e is an object which describes which key we have pressed
  },

  //updating our gameObj according to the input
  update(gameObj) {
    //make sure that user is not dead, because if he is dead he can't control the game anymore
    if (gameObj.userControl == true) {
      if (this.isDown("ArrowLeft")) {
        //go left
        mario.posX -= mario.velX;
        mario.currentDirection = "left";
        mario.currentState = mario.states.walkingAnim;
      }
      if (this.isDown("ArrowRight")) {
        //go right
      }
      // console.log(mario.velY);  at 1.1 velY, it reaches the ground
      if (this.isPressed("Space")) {
        //jump animation
      }
    }
  },
  isDown(key) {
    return this.down[key];
  },
  isPressed(key) {
    if (this.pressed[key]) {
      //if key is already pressed, then no use of doing anything
      return false;
    } else if (this.down[key]) {
      //if key is pressed just now
      return true;
    }
  },
};
