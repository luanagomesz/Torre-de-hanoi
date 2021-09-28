const buttonplay = document.getElementById("play")
const menuinicial = document.getElementById("start")
const main = document.getElementById('main')
const cores = ['#DC143C', '#CD5C5C', '#F08080', '#FFC0CB', '#FFB6C1']
const tamanhos = ['80px', "70px", "60px", "50px", "40px"]
const mensagem = ['Parabéns Einstein, você venceu 🤓', 'Stephen Hawking ficaria impressionado 🧐', 'um genio incompreendido, Parabéns 👌',]
document.getElementById("minimoMovimento").innerText = "Vitoria ideal é 7 movimentos"

// criando torres dinamicamente
for (let i = 1; i <= 3; i++) {
    let torress = document.createElement('div')
    torress.setAttribute('id', 'torre' + i)
    torress.setAttribute('class', 'torre')
    document.getElementById("box1").appendChild(torress)
}


// ao iniciar jogo esconde menu inicial e cria discos dinamicamente
buttonplay.addEventListener('click', function () {
    menuinicial.style.display = "none";
    main.style.display = "flex"
    document.getElementById("voltarMenu").style.display = "flex"
    const torre1 = document.getElementById("torre1")
    for (let i = 1; i <= quantidade; i++) {
        let discos = document.createElement('div')
        discos.style.width = tamanhos[i - 1]
        discos.style.height = "20px"
        discos.style.backgroundColor = cores[i - 1]
        discos.style.border = "1px solid black"
        discos.style.borderRadius = "8px"
        discos.style.cursor = "pointer"
        discos.setAttribute('id', 'disco' + i)
        torre1.appendChild(discos)
    }
})

const tutorial = document.getElementById("tutorial").addEventListener('click', function () {
    menuinicial.style.display = "none";
    main.style.display = "none"
    document.getElementById("instruções").style.display = "block"
    document.getElementById("voltarMenu").style.display = "flex"

})

const selecionado = document.getElementById("selecionado")
const torre1 = document.getElementById("torre1").addEventListener('click', selecionar)
const torre2 = document.getElementById("torre2").addEventListener('click', selecionar)
const torre3 = document.getElementById("torre3").addEventListener('click', selecionar)
const MovimentosRealizados = document.getElementById("contagem")
let count = 0
function selecionar(e) {
    if (selecionado.childElementCount > 0) {
        if (e.currentTarget.childElementCount == 0) {
            e.currentTarget.appendChild(selecionado.lastElementChild)
            count++
        }
        else if (e.currentTarget.lastElementChild.clientWidth > selecionado.clientWidth) {
            e.currentTarget.appendChild(selecionado.lastElementChild)
            count++
        }
        MovimentosRealizados.innerText = count
    }
    else if (e.currentTarget.childElementCount > 0 && selecionado.childElementCount == 0) {
        let lastchild = e.currentTarget.lastElementChild
        selecionado.appendChild(lastchild)
    }
    mensagemVitoria()
}
//botão de voltar a tela inicial
const botaovoltar = document.getElementById("buttonMenu").addEventListener("click", function () {
    menuinicial.style.display = "flex";
    main.style.display = "none"
    document.getElementById("instruções").style.display = "none"
    document.getElementById("voltarMenu").style.display = "none"

    count = 0
    MovimentosRealizados.innerText = count
    document.getElementById("torre1").innerHTML = ""
    document.getElementById("torre2").innerHTML = ""
    document.getElementById("torre3").innerHTML = ""
    document.getElementById("imgbox").style.display = 'none'
    document.getElementById("vitoria").innerText = ""
    document.getElementById("selecionado").innerText = ""
})

//botão de Reset
const reset = document.getElementById("reset")
reset.addEventListener('click', function () {
    document.getElementById("imgbox").style.display = 'none'
    document.getElementById("vitoria").innerText = ""
    count = 0
    MovimentosRealizados.innerText = count
    let torre = document.getElementById("torre1")
    torre.appendChild(document.getElementById("disco1"))
    torre.appendChild(document.getElementById("disco2"))
    torre.appendChild(document.getElementById("disco3"))
    torre.appendChild(document.getElementById("disco4"))
    torre.appendChild(document.getElementById("disco5"))
})

//seletor de dificuldade

const facil = document.getElementById('facil').addEventListener('click', function () {
    let dificuldade = document.getElementById("dificuldade")
    dificuldade.innerText = "Fácil"
    quantidade = 3
    document.getElementById("minimoMovimento").innerText = "Vitoria ideal é 7 movimentos"
})
const equilibrado = document.getElementById('equilibrado').addEventListener('click', function () {
    let dificuldade = document.getElementById("dificuldade")
    dificuldade.innerText = "Equilibrado"
    quantidade = 4
    document.getElementById("minimoMovimento").innerText = "Vitoria ideal é 15 movimentos"
})
const dificil = document.getElementById('dificil').addEventListener('click', function () {
    let dificuldade = document.getElementById("dificuldade")
    dificuldade.innerText = "Difícil"
    quantidade = 5
    document.getElementById("minimoMovimento").innerText = "Vitoria ideal é 31 movimentos"
})

let quantidade = 3

const torreMeio = document.getElementById("torre2")
const torreCanto = document.getElementById("torre3")
//mensagem vitoria
function mensagemVitoria() {
    const torreFinal = document.getElementById("torre3")
    if (quantidade == 3 && (torreMeio.childElementCount == 3 || torreCanto.childElementCount == 3)) {
        let aleatorio = Math.floor(Math.random() * mensagem.length)
        document.getElementById("vitoria").innerText = mensagem[aleatorio]
        document.getElementById("imgbox").style.display = 'flex'
    }
    else if (quantidade == 4 && (torreMeio.childElementCount == 4 || torreCanto.childElementCount == 4)) {
        let aleatorio = Math.floor(Math.random() * mensagem.length)
        document.getElementById("vitoria").innerText = mensagem[aleatorio]
        document.getElementById("imgbox").style.display = 'flex'

    }
    else if (quantidade == 5 && (torreMeio.childElementCount == 5 || torreCanto.childElementCount == 5)) {
        let aleatorio = Math.floor(Math.random() * mensagem.length)
        document.getElementById("vitoria").innerText = mensagem[aleatorio]
        document.getElementById("imgbox").style.display = 'flex'

    }



}