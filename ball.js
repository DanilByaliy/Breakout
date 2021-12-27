class Ball {
    static ballInstance;

    constructor(x = 200, y = 422, radius = 8, speed = 4, dx = 3 * (Math.random() * 2 - 1), dy = -3) {
        this._x = x;
        this._y = y;
        this.radius = radius;
        this.speed = speed;
        this.dx = dx;
        this.dy = dy;
    }

    static getInstance() {
        if (!this.ballInstance) {
          this.ballInstance = new Ball();
        }
    
        return this.ballInstance;
    }
 
    getX(){
        return this._x;
    }

    getY(){
        return this._y;
    }

    draw(ctx){
        ctx.beginPath();
        
        ctx.arc(this._x, this._y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "#2e3548";
        ctx.fill();
        
        ctx.strokeStyle = "#2e3548";
        ctx.stroke();
        
        ctx.closePath();
    }

    move(){
        this._x += this.dx;
        this._y += this.dy;
    }

    ballWallCollision(cvs){
        if(this._x + this.radius > 400 || this._x - this.radius < 0){
            this.dx = - this.dx;
        }
        
        if(this._y - this.radius < 0){
            this.dy = -this.dy;
        }
        
        if(this._y + this.radius > 500){
            this.resetBall(cvs);
        }
    }

    resetBall(){
        this._x = 400/2;
        this._y = 500 - 70 - 8;
        this.dx = 3 * (Math.random() * 2 - 1);
        this.dy = -3;
    }
}

export { Ball };