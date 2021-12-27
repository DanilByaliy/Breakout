import { Brick } from "./brick.js";

class BrickTwo extends Brick{

    status = 2;
    fillColor;

    draw(ctx){
        if(this.status){
            ctx.fillStyle = (this.status === 2) ? "#0000FF" : "#87CEEB";
            ctx.fillRect(this.x, this.y, 55, 20);
                   
            ctx.strokeStyle = "#FFF";
            ctx.strokeRect(this.x, this.y, 55, 20);

        }
    }
}

export { BrickTwo };
