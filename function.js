function ballPaddleCollision(ball, paddle){
    if(ball.getX() < paddle.getX() + paddle.width && ball.getX() > paddle.getX() 
    && paddle.getY() < paddle.getY() + paddle.height && ball.getY() > paddle.getY()){

        // CHECK WHERE THE BALL HIT THE PADDLE
        let collidePoint = ball.getX() - (paddle.getX() + paddle.width/2);
        
        // NORMALIZE THE VALUES
        collidePoint = collidePoint / (paddle.width/2);
        
        // CALCULATE THE ANGLE OF THE BALL
        let angle = collidePoint * Math.PI/3;  
            
        ball.dx = ball.speed * Math.sin(angle);
        ball.dy = - ball.speed * Math.cos(angle);
    }
}

function ballBrickCollision(ball, bricks, SCORE){

    for (let i = 0; i < bricks.length; i++){
        let b = bricks[i];
        if(b.status){
            if(ball.getX() + ball.radius > b.x && ball.getX() - ball.radius < b.x + 55 
            && ball.getY() + ball.radius > b.y && ball.getY() - ball.radius < b.y + 20){
                ball.dy = - ball.dy;
                b.status -= 1;
                return true;
            }
        }
    }
}

export { ballPaddleCollision, ballBrickCollision };