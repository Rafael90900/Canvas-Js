window.onload = function(){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


function criarQuadrado(x, y, largura, cor){

    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, largura) ;
}


function desenharQuadrado(){
        const tamanhoQuadrado = 50;
        const distancia = 5;
        const larguraCanvas = canvas.width;
        let x = 0;
        while (x + tamanhoQuadrado <= larguraCanvas) {
            criarQuadrado(x, 0, tamanhoQuadrado, '#000');
            x += tamanhoQuadrado + distancia;
        }
}

desenharQuadrado();


function criarCirculo(x, y, largura, cor){

    ctx.fillStyle = cor;
    ctx.fillarc(x, y, largura, largura) ;
}

function desenharCirculo(){
    const tamanhoQuadrado = 50;
    const distancia = 5;
    const larguraCanvas = canvas.width;
    let x = 0;
    while (x + tamanhoQuadrado <= larguraCanvas) {
        criarCirculo(x, 0, tamanhoQuadrado, '#000');
        x += tamanhoQuadrado + distancia;
    }
}

desenharCirculo();

}