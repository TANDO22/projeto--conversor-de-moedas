const botaoconversor = document.querySelector(".botao-conversor")


function conversordevalores() {
    const valordoinput = document.querySelector(".valor").value
    const valoraserconvertido = document.querySelector(".valor-a-ser-convertido")
    const valorconvertido = document.querySelector(".valor-convertido")

    valoraserconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currancy: "BRL"   
    }).format(valordoinput)

    valorconvertido.innerHTML = valordoinput / 5
}

botaoconversor.addEventListener("click", conversordevalores)