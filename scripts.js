const botaoconversor = document.querySelector(".botao-conversor")


function conversordevalores() {
    const valordoinput = document.querySelector(".valor").value
    const valoraserconvertido = document.querySelector(".valor-a-converter")
    const valorconvertido = document.querySelector(".valor-a-ser-convertido")

    valoraserconvertido.innerHTML = valordoinput
}

botaoconversor.addEventListener("click", conversordevalores)