const botaoconversor = document.querySelector(".botao-conversor")
const seletormoeda = document.querySelector(".seletor-converter-para")

function conversordevalores() {
    const valordoinput = document.querySelector(".valor").value
    const valoraserconvertido = document.querySelector(".valor-a-ser-convertido")
    const valorconvertidomoedas = document.querySelector(".valor-convertido-dolar")

    const dolardiario = 5.2
    const eurodiario = 6.2
    const libradiaria = 5.4

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

    if (seletormoeda.value == "libra") {
        valorconvertidomoedas.innerHTML = new Intl.NumberFormat("en-GP", {
            style: "currency",
            currency: "GBP"
        }).format(valordoinput / libradiaria)
    }
}

function mudancademoedadolar() {
    const infomoedadolar = document.querySelector(".info-moeda-dolar")
    const imagemmoedadolar = document.querySelector(".imagem-bandeira-estadosunidos")

    if (seletormoeda.value == "dolar") {
        infomoedadolar.innerHTML = "Dólar"
        imagemmoedadolar.src = "./assets/estados-unidos (1) 1.png"
    }

    if (seletormoeda.value == "euro") {
        infomoedadolar.innerHTML = "Euro"
        imagemmoedadolar.src = "./assets/euro.png"
    }

    if (seletormoeda.value == "libra") {
        infomoedadolar.innerHTML = "Libra"
        imagemmoedadolar.src = "./assets/libra.png"
    }
    conversordevalores()
}


seletormoeda.addEventListener("change", mudancademoedadolar,)
botaoconversor.addEventListener("click", conversordevalores)