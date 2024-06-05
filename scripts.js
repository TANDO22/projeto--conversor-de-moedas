const botaoconversor = document.querySelector(".botao-conversor")
const seletormoeda = document.querySelector(".seletor-converter-para")

function conversordevalores() {
    const valordoinput = document.querySelector(".valor").value
    const valoraserconvertido = document.querySelector(".valor-a-ser-convertido")
    const valorconvertidomoedas = document.querySelector(".valor-convertido-dolar")

    const dolardiario = 5.2
    const eurodiario = 6.2

    if (seletormoeda.value == "dolar") {
        valorconvertidomoedas.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valordoinput / dolardiario)
    }

    if (seletormoeda.value == "euro") {
       valorconvertidomoedas.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
       }).format(valordoinput / eurodiario)
    }

    valoraserconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valordoinput)
}

botaoconversor.addEventListener("click", conversordevalores)