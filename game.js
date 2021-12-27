import {Brick} from "./brick.js"
import {BrickTwo} from "./brickTwo.js"
import {BrickThree} from "./brickThree.js";
import * as fun from "./function.js"

class Game {

    static gameInstance;
    ctx;
    cvs;
    _ball;
    _bricks;
    _paddle;
    _rightArrow;
    _leftArrow;
    _LEVEL = 1;
    _SCORE = 0;
    _LIFE = 3;
    _GAME_OVER = false;
    gameover = document.getElementById("gameover");
    youwon = document.getElementById("youwin");
    youlose = document.getElementById("youlose");
    
    static getInstance() {
        if (!this.gameInstance) {
        this.gameInstance = new Game();
        }

        return this.gameInstance;
    }

    init(ball, bricks, paddle, ctx, cvs) {
        this._ball = ball;
        this._bricks = bricks;
        this._paddle = paddle;
        this.ctx = ctx;
        this.cvs = cvs;
        this.createBricks(this._bricks, this._LEVEL);
    }

    createBricks(bricks, LEVEL){
        for(let r = 0; r < LEVEL; r++){
            for(let c = 0; c < 5; c++){
                switch (LEVEL) {
                    case 1:
                        bricks[r*5 + c] = new Brick(r, c);
                        break;
                    case 2:
                        bricks[r*5 + c] = new BrickTwo(r, c);
                        break;
                    case 3:
                        bricks[r*5 + c] = new BrickThree(r, c);
                        break;
                }
                console.log(bricks[r*5 + c]);
            }
        }
        console.log(bricks);
    }

    showGameStats(text, textX, textY, img, imgX, imgY){
        this.ctx.fillStyle = "#000000";
        this.ctx.font = "25px Germania One";
        this.ctx.fillText(text, textX, textY);
        this.ctx.drawImage(img, imgX, imgY, 25, 25);
    }

    gameOver(){
        if(this._LIFE <= 0){
            this.showYouLose();
            this._GAME_OVER = true;
        }
    }

    levelUp(bricks, ball){
        let isLevelDone = true;

        for(let i = 0; i < bricks.length; i++){
            isLevelDone = isLevelDone && ! bricks[i].status;
        }

        if(isLevelDone){

            if(this._LEVEL >= 3 ){
                this.showYouWin();
                this._GAME_OVER = true;
                return;
            }
    
            ball.speed += 0.5;
            ball.resetBall(this.cvs);
            this._LEVEL += 1;
            this.createBricks(bricks, this._LEVEL)
            console.log(this._LEVEL);
            return true
        }
    }

    draw(){
        this._paddle.draw(this.ctx);
        this._ball.draw(this.ctx);
        
        for (let i = 0; i < this._bricks.length; i++){
            this._bricks[i].draw(this.ctx);
        }

        // SHOW SCORE
        this.showGameStats(this._SCORE, 35, 25, SCORE_IMG, 5, 5);
        // SHOW LIVES
        this.showGameStats(this._LIFE, this.cvs.width - 25, 25, LIFE_IMG, this.cvs.width-55, 5); 
        // SHOW LEVEL
        this.showGameStats(this._LEVEL, this.cvs.width/2, 25, LEVEL_IMG, this.cvs.width/2 - 30, 5);
    }

    update(ball, paddle, bricks, leftArrow, rightArrow){
        paddle.move(leftArrow, rightArrow);
        
        ball.move();
        
        if ((ball.getY() + ball.radius) > 500){
            this._LIFE = this._LIFE - 1;
        };
    
        ball.ballWallCollision();
        fun.ballPaddleCollision(ball, paddle);
        
        if (fun.ballBrickCollision(ball, bricks, this._SCORE)) this._SCORE += 10;
        
        this.gameOver();
        this.levelUp(this._bricks, this._ball);    
    }

    showYouWin(){
        gameover.style.display = "block";
        youwon.style.display = "block";
    }

    showYouLose(){
        gameover.style.display = "block";
        youlose.style.display = "block";
    }

    proces(){
        this.ctx.drawImage(BG_IMG, 0, 0);
        this.draw();
        this.update(this._ball, this._paddle, this._bricks, this._leftArrow, this._rightArrow);
    }
}

export { Game };