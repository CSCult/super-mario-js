//inherit brick class from class entity
class Brick extends Entity {
  //create a constructor
  constructor(tileset, posX, posY, width, height) {
    //create object sprite
    //use super to use base class constructor
  }
  //create particles which takes gameobj
  createParticles(gameObj) {
    //particle for left side
    //pass image, posX, posY, width/2, height/2, velX, velY
    let l1 = new Particle();

    //particle for right side
    //pass image, posX, posY, width/2, height/2, velX, velY
    let r1 = new Particle();

    gameObj.entities.particles.push(l1, r1);

    //use settimeout of 300ms to showcase the particles
    setTimeout(() => {
      //take index of particles and pass individually for left and right index from the sheet by splicing it
    }, 300);
  }
}
