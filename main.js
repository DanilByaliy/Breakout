import { Paddle } from "./paddle.js"
import { Ball } from "./ball.js";
import { Game } from "./game.js"

const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d");

cvs.style.border = "1px solid #0ff";
const restart = document.getElementById("restart");

const game = Game.getInstance();
game.init(Ball.getInstance(), [], Paddle.getInstance(), ctx, cvs);

document.addEventListener("keydown", function(event){
    if(event.keyCode == 37){
        game._leftArrow = true;
    }else if(event.keyCode == 39){
        game._rightArrow = true;
    }
});

document.addEventListener("keyup", function(event){
    if(event.keyCode == 37){
        game._leftArrow = false;
    }else if(event.keyCode == 39){
        game._rightArrow = false;
    }
});
restart.addEventListener("click", function(){
    location.reload(); 
})

function loop(){
    game.proces()
    if(! game._GAME_OVER){
        requestAnimationFrame(loop);
    }
}
loop();
