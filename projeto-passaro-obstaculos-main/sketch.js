
let passaro;
let gameOver = false;
let grupoObstaculo;
let bg;
;

function preload() {
    passarovoando = loadAnimation("sprite.png")
    bg = loadImage("wp6957163.png")
}


function setup() {
    //! 0. Função chamada ao iniciar a execução do código

    //! 0. Cria o canvas com a largura e altura especificadas
    createCanvas(1000, 500);
    passaro = createSprite(20, 20)
    passaro.addAnimation("sprite", passarovoando)

    passaro.scale = 0.1

    grupoObstaculo = new Group()
    passaro.collide(grupoObstaculo)
}


function draw() {
    //! 0. Função chamada a cada frame (quadro)

    //! 0. Limpa o plano de fundo e define a sua cor
    background(bg)
    if (gameOver == false) {
        passaro.velocityY = passaro.velocityY + 0.5
        if (keyDown("space")) {
            passaro.velocityY = -10

        }
        if (passaro.y > height) {
            gameOver = true
        }
        if (passaro.y < 0) {
            gameOver = true
        }
        if (grupoObstaculo.isTouching(passaro)) {
            gameOver = true
        }
        gerarObstaculo()
    }
    else {
textSize(50)
text("GAME OVER",400,350)

    }




    //! 0. Desenha os sprites na tela
    drawSprites();

}

function gerarObstaculo() {

    if (frameCount % 60 == 0) {
        let ObstaculoSuperior = createSprite(
            width,
            0,
            50,
            400

        )
        ObstaculoSuperior.shapeColor="red"
        ObstaculoSuperior.velocityX=-8
        ObstaculoSuperior.lifetime=300
        let Obstaculoinferior = createSprite(
            width,
            height,
            50,
            400

        )
        Obstaculoinferior.shapeColor="green"
        Obstaculoinferior.velocityX=-8
        Obstaculoinferior.lifetime=300
        
        grupoObstaculo.add(ObstaculoSuperior)
        grupoObstaculo.add(Obstaculoinferior)




    }

}