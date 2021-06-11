var pos = 0;
const pacArray = [
    ['./img/PacMan1.png', './img/PacMan2.png'],
    ['./img/PacMan3.png', './img/PacMan4.png']
];
var direction = 0;
let pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}
// Factory to make a PacMan at a random position with random velocity
function makePac() {
    // returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(200);
    // Add image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = './img/PacMan1.png';
    newimg.width = 100;
    console.log(newimg);
    //
    // set position here 
    //
    newimg.style.top = position.y;
    newimg.style.left = position.x;
    // add new Child image to game
    game.appendChild(newimg);
    // return details in an object
    return {
        position,
        velocity,
        newimg
    }
}

function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    })
    setTimeout(update, 20);
}

function checkCollisions(item) {
    //
    // detect collision with all walls and make pacman bounce
    //
    let container = document.getElementById('canvas');
    container.offsetWidth =  80+"%";
    container.offsetHeight = 90+"%";
    let canvasWidth = Number(container.offsetWidth);
    let canvasHeight = Number(container.offsetHeight);
    let canvasTop = 0;
    let canvasLeft = 0;
    let pacMenLtR = item.position.x + item.velocity.x + item.newimg.width;
    let pacMenUtB = item.position.y + item.velocity.y + item.newimg.height;
    
    if ( pacMenLtR >= canvasWidth || item.position.x + item.velocity.x < canvasLeft) return item.velocity.x = -item.velocity.x;

    if ( pacMenUtB >= canvasHeight || item.position.y + item.velocity.y < canvasTop) return item.velocity.y = -item.velocity.y;

}

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}