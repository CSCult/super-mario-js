const castleImage = new Image();
const cloudImage = new Image();
const mountainImage = new Image();
const spritesheetImage = new Image();
const tilesetImage = new Image();

function preload() {
    // Loading sprite images
    castleImage.src = "assets/sprites/castle.png";
    cloudImage.src = "assets/sprites/clouds.png";
    mountainImage.src = "assets/sprites/mountain.png";
    spritesheetImage.src = "assets/sprites/spritesheet.png";
    tilesetImage.src = "assets/sprites/tileset_gutter.png";

    // Promises
    return new Promise((resolve, reject) => {
        let p1 = new Promise((resolve, reject) => {
            castleImage.addEventListener('load', () => {
                console.log('Image loaded...');
                resolve();
            })
        })
        let p2 = new Promise((resolve, reject) => {
            cloudImage.addEventListener('load', () => {
                console.log('Image loaded...');
                resolve();
            })
        })
        let p3 = new Promise((resolve, reject) => {
            mountainImage.addEventListener('load', () => {
                console.log('Image loaded...');
                resolve();
            })
        })
        let p4 = new Promise((resolve, reject) => {
            spritesheetImage.addEventListener('load', () => {
                console.log('Image loaded...');
                resolve();
            })
        })
        let p5 = new Promise((resolve, reject) => {
            tilesetImage.addEventListener('load', () => {
                console.log('Image loaded...');
                resolve();
            })
        })
        let BigPromise = Promise.all([p1,p2,p3,p4,p5]);
        BigPromise.then(() => {
            resolve();
        })
    })
}

preload();