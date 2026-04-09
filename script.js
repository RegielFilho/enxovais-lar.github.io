// ===== SCROLL SUAVE =====

// Ir para catálogo
function scrollToCatalog() {
    const el = document.getElementById("catalogo");
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

// Ir para contato
function scrollToContato() {
    const el = document.getElementById("contato");
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}


// ===== WHATSAPP AUTOMÁTICO =====

document.addEventListener("DOMContentLoaded", function () {

    const whatsappButton = document.querySelector(".whatsapp-btn");

    if (whatsappButton) {
        const hoje = new Date();
        const dataFormatada = hoje.toLocaleDateString("pt-BR");

        const numero = "554197347188"; // seu número
        const mensagem = `Olá! Visitei o site hoje (${dataFormatada}) e gostaria de mais informações sobre os produtos.`;

        const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        whatsappButton.href = link;
    }

});


// ===== FILTRO DE CATEGORIAS =====

function filtrar(categoria, botaoClicado) {

    const produtos = document.querySelectorAll(".produto");
    const botoes = document.querySelectorAll(".categorias button");

    // Remove ativo de todos
    botoes.forEach(botao => botao.classList.remove("ativo"));

    // Ativa o clicado
    if (botaoClicado) {
        botaoClicado.classList.add("ativo");
    }

    produtos.forEach(produto => {

        // Card especial (sempre aparece)
        if (produto.classList.contains("destaque")) {
            produto.style.display = "flex"; // importante (não usar block aqui)
            return;
        }

        // Filtro normal
        if (categoria === "todos") {
            produto.style.display = "block";
        } else {
            produto.style.display =
                produto.classList.contains(categoria) ? "block" : "none";
        }
    });

}


// ===== MODAL DE PRODUTO =====

function abrirProduto(elemento) {

    const imagensString = elemento.getAttribute("data-imagens");

    if (!imagensString) return;

    const imagens = imagensString.split(",").map(img => img.trim());

    const modal = document.getElementById("modal");
    const principal = document.getElementById("imagemPrincipal");
    const miniaturas = document.getElementById("miniaturas");

    if (!modal || !principal || !miniaturas) return;

    principal.src = imagens[0];
    miniaturas.innerHTML = "";

    imagens.forEach(img => {
        const imagem = document.createElement("img");
        imagem.src = img;

        imagem.onclick = function () {
            principal.src = img;
        };

        miniaturas.appendChild(imagem);
    });

    modal.style.display = "flex";
}


// ===== FECHAR MODAL =====

function fecharModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
}


// Fechar clicando fora
window.addEventListener("click", function (event) {
    const modal = document.getElementById("modal");

    if (modal && event.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const descricoes = document.querySelectorAll(".produto p");

    descricoes.forEach(p => {
        p.textContent = "Vários modelos disponíveis";
    });
});
document.addEventListener("click", () => document.activeElement.blur());