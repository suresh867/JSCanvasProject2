/**@type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvasWidth = 500;
canvasHeight =600;
canvas.height = canvasHeight;
canvas.width = canvasWidth
const numberOfEnemies = 50;
const enemiesArray = [];

// const enemyImage = new Image();
// enemyImage.src = 'enemy1.png';
let gameFrame = 0;

class Enemy{
    constructor(){
        this.image = new Image();
        // this.image.src = 'enemy2.png'
        this.image.src = 'enemy3.png'
        this.speed = Math.random()* 4+1;
        this.spriteHeight = 177; 
        this.spriteWidth = 218;
        // this.spriteHeight = 188; 
        // this.spriteWidth = 266;
        this.width = this.spriteWidth / 3;
        this.height = this.spriteHeight / 3;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height); 
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;
        this.angleSpeed = Math.random() * 2;
        this.curve = Math.random() * 240;
    }
    update(){
        //for random movements of enemies in the canvas
        
        // this.x -= this.speed;
        // this.y +=this.curve * Math.sin(this.angle);

        //for circular movement of the enemies. 
        this.x = this.curve *  Math.sin(this.angle * Math.PI/180) + (canvas.width/2 - this.width/2);
        this.y = this.curve * Math.cos(this.angle * Math.PI/180) + (canvas.height/2 - this.height/2);
        this.angle += this.angleSpeed;

        if(this.x + this.width < 0) this.x = canvas.width;
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