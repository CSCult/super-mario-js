//movement object, which changes the currentstate of entities to make animation
const movement = {
  update(gameObj) {
    gameObj.entities.goombas.forEach((goomba) => {
      goomba.currentState.movement(gameObj);
    });
    //similarly do for koopas,coins and mushrooms
  },
};
