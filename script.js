//menu hamburguer

let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let sombra = document.getElementById("sombra")

function abreFechaMenu(){
    if (window.getComputedStyle(menu).right == "-210px"){
        menu.style.right = "0"
        iconeX.style.display = "inline"
        iconeBarras.style.display = "none"
        sombra.style.right = "0"
    } 
    else{
        menu.style.right = "-210px"
        iconeX.style.display = "none"
        iconeBarras.style.display = "inline"
        sombra.style.right = "-101vw"
    }

}

onresize = () => {
    if (window.getComputedStyle(menu).right == "-210px"){
        //Mostra icone X
        iconeX.style.display = "none"
    } else{
        //Esconde icone barras
        iconeBarras.style.display = "inline"
    }
}

const cafePrincipal = document.getElementById("cafePrincipal");
const cafeNome = document.querySelector(".cafe-nome");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {

        // Troca imagem grande
        cafePrincipal.src = thumb.dataset.img;

        // Troca nome
        cafeNome.textContent = thumb.dataset.nome;

        // Atualiza destaque
        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
    });
});
