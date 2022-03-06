//calls the functions of characters based on its state

let animation = {
  update(gameObj) {
    let mario = gameObj.entities.mario;
    mario.currentState(gameObj);

    //using a for each loop add animation to goomba, koopa, blocks and coins
    //goomba has been done as an example
    // gameObj.entities.goombas.forEach((goomba) => {
    //   goomba.currentState.animation(gameObj);
    // });
  },
};
