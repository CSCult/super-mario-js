//calls the functions of characters based on its state

let animation = {
  update(gameObj) {
    //inititalise mario object in a variable and set its currentState as gameObj

    //using a for each loop add animation to goomba, koopa, blocks and coins
    //goomba has been done as an example
    gameObj.entities.goombas.forEach((goomba) => {
      goomba.currentState.animation(gameObj);
    });
  },
};
