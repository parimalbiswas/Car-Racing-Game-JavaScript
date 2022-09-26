const score = document.querySelector(".score");

const startSceen = document.querySelector(".startSceen");

const gameArea = document.querySelector(".gameArea");



startSceen.addEventListener("click", start);
function start() {

    gameArea.classList.remove("hide");
    startSceen.classList.add("hide");


    player.start = true;
    window.requestAnimationFrame(gamePlay);

    let car = document.createElement("div");
    car.setAttribute("class","car");
    //car.innerText="Car I am";
    gameArea.appendChild(car);
}

function gamePlay() {
    console.log("Game suru");
    if (player.start) {
        window.requestAnimationFrame(gamePlay);
    }


}



let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = {};

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
// document.addEventListener("keydown",keydown);
// document.addEventListener("keydown",keydown);


function keydown(e) {
    e.preventDefault();
    keys[e.key] = true;
    console.log(e.key);
    console.log(keys);
}

function keyup(e) {
    e.preventDefault();
    keys[e.key] = false;
    console.log(e.key);
    console.log(keys);
}