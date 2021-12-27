import { Brick } from "./brick.js";

class BrickThree extends Brick{

    status = 3;
    fillColor;

    draw(ctx){
        switch (this.status) {
            case 3: 
                this.fillColor = "#FF0000"
                break;
            case 2: 
                this.fillColor = "#FFFF00"
                break;
            case 1: 
                this.fillColor = "#008000"
                break;
        }

        if(this.status){
            ctx.fillStyle = this.fillColor;
            ctx.fillRect(this.x, this.y, 55, 20);
                   
            ctx.strokeStyle = "#FFF";
            ctx.strokeRect(this.x, this.y, 55, 20);
        }
    }
}

export { BrickThree };
