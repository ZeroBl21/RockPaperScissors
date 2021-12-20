"use strict"

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const player = document.getElementById("player-img");
const machine = document.getElementById("machine-img");
const result = document.getElementById("result")

function game(user){
    let cpu = Math.floor(Math.random() * 3 + 1);
    
    player.src = `./assets/op${user}.png`;
    machine.src = `./assets/op${cpu}.png`;

    switch (true){
        case user === cpu:
            result.innerHTML = "Empate";
            break;
        case user == 1 && cpu == 3:
            result.innerHTML = "Usuario Gana";
            break;
        case user == 2 && cpu == 1:
            result.innerHTML = "Usuario Gana";
            break;
        case user == 3 && cpu == 2:
            result.innerHTML = "Usuario Gana";
            break;   
        default:
            result.innerHTML = "Maquina Gana";
    }
}
            
            
            
rock.addEventListener('click',()=>{
    game(1);
});
paper.addEventListener("click",()=>{
    game(2);
});
scissors.addEventListener("click",()=>{
    game(3);
});