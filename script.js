const score = document.querySelector(".score");

const startSceen = document.querySelector(".startSceen");

const gameArea = document.querySelector(".gameArea");



startSceen.addEventListener("click", start);
function start() {

    gameArea.classList.remove("hide");
    startSceen.classList.add("hide");


    player.start = true;
    window.requestAnimationFrame(gamePlay);

    for (let index = 0; index < 10; index++) {
        let roadLine = document.createElement("div");
        roadLine.setAttribute("class", "lines");
        roadLine.y = (index * 150);
        roadLine.style.top = roadLine.y + "px";
        gameArea.appendChild(roadLine);

    }
    // let roadLine = document.createElement("div");
    // roadLine.setAttribute("class","lines");
    // gameArea.appendChild(roadLine);



    let car = document.createElement("div");
    car.setAttribute("class", "car");
    //car.innerText="Car I am";
    gameArea.appendChild(car);


    player.x = car.offsetLeft;
    player.y = car.offsetTop;


    // console.log("Top Position ->"+car.offsetTop);
    // console.log("Left Position ->"+car.offsetLeft);
}


function moveLines() {
    let lines = document.querySelectorAll(".lines");
    lines.forEach(function (elem) {
        elem.y += player.speed;
        roadLine.style.top = roadLine.y + "px";
    });

}

8: 27


function gamePlay() {
    console.log("Game suru");
    let car = document.querySelector(".car");

    let road = gameArea.getBoundingClientRect();
    console.log(road);

    if (player.start) {

        if (keys.ArrowUp && player.y > (road.top + 150)) {
            player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < (road.bottom - 70)) {
            player.y += player.speed;
        }

        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < (road.width - 50)) {
            player.x += player.speed;
        }

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";


        window.requestAnimationFrame(gamePlay);
    }


}



let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = { speed: 9 };

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