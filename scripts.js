const botaoconversor = document.querySelector(".botaoconversor")

function conversordevalores() {
    const valordoinput = document.querySelector(".valor").value

    const dolardodia = 5

    const valorconvertido = valordoinput / dolardodia
    console.log(valorconvertido)
}

botaoconversor.addEventListener("click", conversordevalores)