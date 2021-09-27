const buttonplay = document.getElementById("play")
const menuinicial = document.getElementById("start")
const main = document.getElementById('main')
buttonplay.addEventListener('click', function(){
menuinicial.style.display = "none";
main.style.display = "flex"
})