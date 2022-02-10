//create empty image object for castle, cloud, mountain, spritesheet, tileset
const castleImage = new Image(); // <- like this

//function preload for preloading all our spites before starting the game
function preload() {
  //provide the path of the images to the e,pty image objects
  castleImage.src = "./assets/sprites/castle.png"; // <- like this

  //Promise makes sure that all the things happen only after we completely load the asset
  //every promise depicts the time to wait for loading of an image
  return new Promise(function (resolve, reject) {
    //create promise for each image object
    let p1 = new Promise(function (resolve, reject) {
      //for each image object, add an event listener, which prints "Image Loaded in the console" whenever the image loads and resolve it
      castleImage.addEventListener("load", function () {});
    });
    let p2 = new Promise(function (resolve, reject) {});
    let p3 = new Promise(function (resolve, reject) {});
    let p4 = new Promise(function (resolve, reject) {});
    let p5 = new Promise(function (resolve, reject) {});

    //make a BigPromise
    //this promise will resolve when all the other promises get resolved
    let BigPromise = Promise.all([(p1, p2, p3, p4, p5)]);
    //resolve it
  });
}
preload();
