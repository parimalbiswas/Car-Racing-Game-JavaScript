// 19:55

const score = document.querySelector(".score");

const startSceen = document.querySelector(".startSceen");

const gameArea = document.querySelector(".gameArea");



startSceen.addEventListener("click", start);
function start() {

    //gameArea.classList.remove("hide");
    startSceen.classList.add("hide");
    gameArea.innerHTML = "";


    player.start = true;
    player.score = 0;
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


    for (let index = 0; index < 3; index++) {
        let enemyCar = document.createElement("div");
        enemyCar.setAttribute("class", "enemy");
        enemyCar.style.background = "pink";

        // enemyCar.y = (index * 150);
        enemyCar.y = ((index + 1) * 350) * -1;

        enemyCar.style.left = Math.floor(Math.random() * 350) + "px";
        enemyCar.style.top = enemyCar.y + "px";
        gameArea.appendChild(enemyCar);

    }

    // console.log("Top Position ->"+car.offsetTop);
    // console.log("Left Position ->"+car.offsetLeft);
}


function moveLines() {
    let lines = document.querySelectorAll(".lines");
    lines.forEach(function (elem) {

        if (elem.y >= 800) {
            elem.y -= 750;
        }
        elem.y += player.speed;
        elem.style.top = elem.y + "px";
    });

}

function endGame() {
    player.start = false;
    startSceen.classList.remove("hide");
}



function moveEnemy(car) {
    let enemy = document.querySelectorAll(".enemy");

    enemy.forEach(function (elem) {

        if (isCollide(car, elem)) {
            console.log("Hit");
            endGame();
        }


        if (elem.y >= 850) {
            elem.y = -300;
            elem.style.left = Math.floor(Math.random() * 350) + "px";
        }
        elem.y += player.speed;
        elem.style.top = elem.y + "px";
    });

}




function gamePlay() {
    //console.log("Game suru");
    let car = document.querySelector(".car");

    let road = gameArea.getBoundingClientRect();
    //console.log(road);

    if (player.start) {

        moveLines();
        moveEnemy(car);

        if (keys.ArrowUp && player.y > (road.top + 150)) {
            player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < (road.bottom - 70)) {
            player.y += player.speed;
        }

        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < (road.width - 71.5)) {
            player.x += player.speed;
        }

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";


        window.requestAnimationFrame(gamePlay);
        console.log(player.score++);

        player.score++;
        score.innerText = "Score : " + player.score;
    }


}



let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = { speed: 9, score: 0 };

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
// document.addEventListener("keydown",keydown);
// document.addEventListener("keydown",keydown);


function keydown(e) {
    e.preventDefault();
    keys[e.key] = true;
    //console.log(e.key);
    //console.log(keys);
}

function keyup(e) {
    e.preventDefault();
    keys[e.key] = false;
    //console.log(e.key);
    //console.log(keys);
}


function isCollide(a, b) {
    aRact = a.getBoundingClientRect();
    bRact = b.getBoundingClientRect();

    return !((aRact.bottom < bRact.top) || (aRact.top > bRact.bottom)
        || (aRact.right < bRact.left) || (aRact.left > bRact.right));

}