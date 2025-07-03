let circulo = document.querySelector('.circulo')
let imagem = document.querySelector('.imagem-principal')


function trocarACor(cor){
    circulo.style.background = cor
}

function trocarImagem(endereco){
    imagem.classList.add('fade-out');
    setTimeout(() => {
        imagem.src = endereco;
        imagem.classList.remove('fade-out');
    }, 400); 
}