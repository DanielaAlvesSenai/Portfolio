const imagens = document.querySelectorAll(".atividade img");

const modal = document.getElementById("modal");
const modalImagem = document.getElementById("modalImagem");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescricao = document.getElementById("modalDescricao");

const fechar = document.getElementById("fechar");
const anterior = document.getElementById("anterior");
const proxima = document.getElementById("proxima");

let imagemAtual = 0;


function abrirImagem(numero) {

    imagemAtual = numero;

    const atividade = imagens[imagemAtual].parentElement;

    const titulo = atividade.querySelector("a");
    const descricao = atividade.querySelector("p");

    modalImagem.src = imagens[imagemAtual].src;

    if (titulo) {
        modalTitulo.textContent = titulo.textContent;
    } else {
        modalTitulo.textContent = "";
    }

    if (descricao) {
        modalDescricao.textContent = descricao.textContent;
    } else {
        modalDescricao.textContent = "";
    }

    modal.classList.add("aberto");

    document.body.style.overflow = "hidden";
}


function fecharModal() {

    modal.classList.remove("aberto");

    document.body.style.overflow = "auto";
}


function mostrarAnterior() {

    imagemAtual--;

    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1;
    }

    abrirImagem(imagemAtual);
}


function mostrarProxima() {

    imagemAtual++;

    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }

    abrirImagem(imagemAtual);
}


imagens.forEach(function(imagem, indice) {

    imagem.addEventListener("click", function() {

        abrirImagem(indice);

    });

});


fechar.addEventListener("click", fecharModal);

anterior.addEventListener("click", mostrarAnterior);

proxima.addEventListener("click", mostrarProxima);


modal.addEventListener("click", function(evento) {

    if (evento.target === modal) {
        fecharModal();
    }

});


document.addEventListener("keydown", function(evento) {

    if (!modal.classList.contains("aberto")) {
        return;
    }

    if (evento.key === "ArrowLeft") {
        mostrarAnterior();
    }

    if (evento.key === "ArrowRight") {
        mostrarProxima();
    }

    if (evento.key === "Escape") {
        fecharModal();
    }

});
