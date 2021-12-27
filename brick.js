// const width = 55;
// const height = 20;
// const offSetLeft = 20;
// const offSetTop = 20;
// const marginTop = 40;

class Brick {

    status = true;
    fillColor = "#8B4513";

    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.x = column * (20 + 55) + 20;
        this.y = row * (20 + 20) + 20 + 40;
    }

    draw(ctx){
        if(this.status){
            ctx.fillStyle = this.fillColor;
            ctx.fillRect(this.x, this.y, 55, 20);
                   
            ctx.strokeStyle = "#FFF";
            ctx.strokeRect(this.x, this.y, 55, 20);
        }
    }
}

export { Brick };