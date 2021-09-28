const buttonplay = document.getElementById("play")
const menuinicial = document.getElementById("start")
const main = document.getElementById('main')
const cores = ['#DC143C', '#CD5C5C', '#F08080', '#FFC0CB', '#FFB6C1']
const tamanhos = ['60px', "50px", "40px", "30px", "20px"]

// ao iniciar jogo esconde menu inicial e cria discos dinamicamente
buttonplay.addEventListener('click', function () {
    menuinicial.style.display = "none";
    main.style.display = "flex"
    const torre1 = document.getElementById("torre1")
    for (let i = 1; i <= 3; i++) {
        let discos = document.createElement('div')
        discos.style.width = tamanhos[i - 1]
        discos.style.height = "20px"
        discos.style.backgroundColor = cores[i - 1]
        discos.style.border = "1px solid black"
        discos.style.borderRadius = "8px"
        discos.setAttribute('id', 'disco' + i)
        torre1.appendChild(discos)
    }
})

const selecionado = document.getElementById("selecionado")
const torre1 = document.getElementById("torre1").addEventListener('click', selecionar)
const torre2 = document.getElementById("torre2").addEventListener('click', selecionar)
const torre3 = document.getElementById("torre3").addEventListener('click', selecionar)
const MovimentosRealizados = document.getElementById("contagem")
let count = 0
function selecionar(e) {
    if (selecionado.childElementCount > 0) {       
        if (e.currentTarget.lastElementChild.clientWidth > selecionado.clientWidth) {
            e.currentTarget.appendChild(selecionado.lastElementChild)
            count++
        }
        MovimentosRealizados.innerText = count
    }
    else if (e.currentTarget.childElementCount > 1 && selecionado.childElementCount == 0) {
        let lastchild = e.currentTarget.lastElementChild
        selecionado.appendChild(lastchild)
    }
}


//botão de Reset
const reset = document.getElementById("reset")
reset.addEventListener('click', function () {
    count = 0
    MovimentosRealizados.innerText = count
    let torre = document.getElementById("torre1")
    torre.appendChild(document.getElementById("disco1"))
    torre.appendChild(document.getElementById("disco2"))
    torre.appendChild(document.getElementById("disco3"))
    torre.appendChild(document.getElementById("disco4"))
    torre.appendChild(document.getElementById("disco5"))
})