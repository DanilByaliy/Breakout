class Paddle {

    static paddleInstance;

    constructor(x = 150, y = 430, width = 100, height = 20, dx = 5){
        this._x = x;
        this._y = y;
        this.width = width;
        this.height = height;
        this.dx = dx;
    }

    static getInstance() {
        if (!this.paddleInstance) {
          this.paddleInstance = new Paddle();
        }
        return this.paddleInstance;
    }

    getX(){
        return this._x;
    }

    getY(){
        return this._y;
    }

    draw(ctx){
        ctx.fillStyle = "#FF8C00";
        ctx.fillRect(this._x, this._y, this.width, this.height);
        
        ctx.strokeStyle = "#ffcd05";
        ctx.strokeRect(this._x, this._y, this.width, this.height);
    }

    move(leftArrow, rightArrow){
        if(rightArrow && this._x + this.width < 400){
            this._x += this.dx;
        }else if(leftArrow && this._x > 0){
            this._x -= this.dx;
        }
    }
}

export { Paddle };