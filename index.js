/**@type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvasWidth = 500;
canvasHeight =600;
canvas.height = canvasHeight;
canvas.width = canvasWidth
const numberOfEnemies = 100;
const enemiesArray = [];

// const enemyImage = new Image();
// enemyImage.src = 'enemy1.png';
let gameFrame = 0;

class Enemy{
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy1.png'
        // this.speed = Math.random()* 4-2;
        this.spriteHeight = 180; 
        this.spriteWidth = 293;
        this.width = this.spriteWidth / 3;
        this.height = this.spriteHeight / 3;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height); 
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update(){
        this.x += Math.random() * 3-1.5;
        this.y += Math.random() * 3 - 1.5;
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.width, this.height);
    }
};


for(let i = 0; i< numberOfEnemies; i++){
    enemiesArray.push(new Enemy())
}

function animate(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })
    gameFrame++;
    requestAnimationFrame(animate)
}

animate();