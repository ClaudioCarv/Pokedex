const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const imagemtrocartema = document.querySelector(".imagem-botao")
const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", () => {
    const modoescuroativo = body.classList.contains("modo-escuro");

    if (modoescuroativo) {
        body.classList.remove("modo-escuro")
        imagemtrocartema.setAttribute("src", "./src/imagens/sun.png");
    }else {
        body.classList.add("modo-escuro");
        imagemtrocartema.setAttribute("src", "./src/imagens/moon.png");

    }
})


