const user1Select = document.getElementById("user1-select");
const user2Select = document.getElementById("user2-select");
const buttonStart = document.getElementById("start");
const notify = document.querySelector(".notify");
const notifyType = document.getElementById("notifyType");
const containerTitle = document.querySelector(".container-title")
const containerForm = document.querySelector(".container-form")
const containerGame = document.querySelector(".container");
let cajas = document.querySelectorAll(".box");
const butttonRestart = document.querySelector("#restart");
const buttonModal = document.querySelector(".container-modal__button")
const titleWin = document.querySelector(".container-modal__title");
const modal = document.querySelector(".modal");
const turnTitle = document.querySelector(".turn-title");
const containerFlags = document.querySelector(".container-flags")

containerGame.style.display = "none"

let language = ""

let player1Img;
let player2Img;

let img1;
let img2;
let player1 = 0;
let player2 = 0;
let arrayCajas = []
let points = 0;

//Funcion de comenzar el juego
function characterSelection(){
    //Ver si elegieron un personaje
    if(user1Select.options.selectedIndex == 0 || user2Select.options.selectedIndex == 0){
        if(language == "ingles"){
            notifyType.innerHTML = "Oh no! You have to choose a character";
        } else if (language == "portugues") {
            notifyType.innerHTML = "Ah, não! Você precisa escolher um personagem";
        } else if (language == "spain") {
            notifyType.innerHTML = "Oh, no! Necesitas escoger un personaje";
        }
        notify.classList.add("active");
        notifyType.classList.add("failure");
  
        setTimeout(function(){
            notify.classList.remove("active");
            notifyType.classList.remove("failure");
        },1500);
        //Ver si los dos personajes son diferentes
    } else if (user1Select.options.selectedIndex == user2Select.options.selectedIndex) {
        notifyType.innerHTML = "You have to choose a different character";
        if(language == "ingles"){
            notifyType.innerHTML = "You have to choose a different character";
        } else if (language == "portugues") {
            notifyType.innerHTML = "Você precisa escolher um personagem diferente";
        } else if (language == "spain") {
            notifyType.innerHTML = "Tienes que escoger un personaje diferente";
        }

        notify.classList.add("active");
        notifyType.classList.add("failure");
  
        setTimeout(function(){
            notify.classList.remove("active");
            notifyType.classList.remove("failure");
        },1500);
    } else {
        containerTitle.style.display = "none";
        containerForm.style.display = "none";
        buttonStart.style.display = "none";
        containerGame.style.display = "grid";
        butttonRestart.style.display = "block";
        turnTitle.style.display = "block";
        containerFlags.style.display = "none"
        player1Img = user1Select.selectedOptions[0].value;
        player2Img = user2Select.selectedOptions[0].value;
        img1 = `<img src="img/${player1Img}" alt="">`;
        img2 = `<img src="img/${player2Img}" alt="">`
    }
}

buttonStart.addEventListener("click", characterSelection);

function mostrarImg(e){
    if(player1 == 0){
        playUser1(e);
    }
    if(player1 == player2 ){
        playUser1(e);
    }
    if(player2 < player1){
        playUser2(e);
    }
}

function playUser1(e){
    if (player1 >= player2 && e.target.children.length == 0) {
        e.target.insertAdjacentHTML("afterbegin", img1);
        setTimeout(function(){
            e.target.children[0].style.opacity = 1
            if(language == "ingles"){
                turnTitle.innerHTML = "It's player 2's turn"
            } else if (language == "portugues") {
                turnTitle.innerHTML = "É a vez do jogador 2..."
            } else if (language == "spain") {
                turnTitle.innerHTML = "Es turno del usuario 2"
            }
            
        },250);
        player1++;
        e.target.removeEventListener("click", mostrarImg);
        arrayCajas[e.target.id] = 1;
    }
    if (arrayCajas[0] == 1 && arrayCajas[1] == 1 && arrayCajas[2] == 1){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 1 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 1 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 1"
            }
            modal.style.display = "block";
        },500);
            
    } else {
        points++
    }
    if (arrayCajas[0] == 1 && arrayCajas[4] == 1 && arrayCajas[8] == 1){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 1 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 1 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 1"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if (arrayCajas[0] == 1 && arrayCajas[3] == 1 && arrayCajas[6] == 1){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 1 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 1 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 1"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if (arrayCajas[1] == 1 && arrayCajas[4] == 1 && arrayCajas[7] == 1){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 1 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 1 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 1"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if (arrayCajas[3] == 1 && arrayCajas[4] == 1 && arrayCajas[5] == 1){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 1 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 1 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 1"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if (arrayCajas[6] == 1 && arrayCajas[4] == 1 && arrayCajas[2] == 1){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 1 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 1 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 1"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if (arrayCajas[6] == 1 && arrayCajas[7] == 1 && arrayCajas[8] == 1){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 1 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 1 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 1"
            }
            modal.style.display = "block";
        },500);
    }  else {
        points++
    }
    if (arrayCajas[2] == 1 && arrayCajas[5] == 1 && arrayCajas[8] == 1){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 1 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 1 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 1"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
}

function playUser2(e){
    if (player2 <= player1 && e.target.children.length == 0) {
        e.target.insertAdjacentHTML("afterbegin", img2);
        setTimeout(function(){
            e.target.children[0].style.opacity = 1
            if(language == "ingles"){
                turnTitle.innerHTML = "It's player 1's turn"
            } else if (language == "portugues") {
                turnTitle.innerHTML = "É a vez do jogador 1..."
            } else if (language == "spain") {
                turnTitle.innerHTML = "Es turno del usuario 1"
            }
        },250);
        player2++;
        e.target.removeEventListener("click", mostrarImg);
        arrayCajas[e.target.id] = 2;
    }
    if (arrayCajas[0] == 2 && arrayCajas[1] == 2 && arrayCajas[2] == 2){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 2 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 2 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 2"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if (arrayCajas[0] == 2 && arrayCajas[4] == 2 && arrayCajas[8] == 2){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 2 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 2 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 2"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if (arrayCajas[0] == 2 && arrayCajas[3] == 2 && arrayCajas[6] == 2){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 2 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 2 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 2"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if (arrayCajas[1] == 2 && arrayCajas[4] == 2 && arrayCajas[7] == 2){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 2 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 2 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 2"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if (arrayCajas[3] == 2 && arrayCajas[4] == 2 && arrayCajas[5] == 2){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 2 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 2 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 2"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if (arrayCajas[6] == 2 && arrayCajas[4] == 2 && arrayCajas[2] == 2){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 2 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 2 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 2"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if (arrayCajas[6] == 2 && arrayCajas[7] == 2 && arrayCajas[8] == 2){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 2 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 2 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 2"
            }
            modal.style.display = "block"; 
        },500);
    } else {
        points++
    }
    if (arrayCajas[2] == 2 && arrayCajas[5] == 2 && arrayCajas[8] == 2){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "Player 2 won";
            } else if (language == "portugues") {
                titleWin.innerHTML = "Jogador 2 ganhou";
            } else if (language == "spain") {
                titleWin.innerHTML = "Ganó el Usuario 2"
            }
            modal.style.display = "block";
        },500);
    } else {
        points++
    }
    if(points == 112){
        setTimeout(function(){
            if(language == "ingles"){
                titleWin.innerHTML = "The game is tied";
            } else if (language == "portugues") {
                titleWin.innerHTML = "O jogo está empatado";
            } else if (language == "spain") {
                titleWin.innerHTML = "El juego está empatado"
            }
            
            modal.style.display = "block";
        },500);
    }
}

for (let i = 0; i < cajas.length; i++) {
    const element = cajas[i];
    element.addEventListener("click", mostrarImg);
}

function restartGame(){
        
    modal.style.display = "none";
    const container = document.querySelector(".container");
    const newContainer = `<div class="container">
    <div class="box" id="0"></div>
    <div class="box" id="1"></div>
    <div class="box" id="2"></div>
    <div class="box" id="3"></div>
    <div class="box" id="4"></div>
    <div class="box" id="5"></div>
    <div class="box" id="6"></div>
    <div class="box" id="7"></div>
    <div class="box" id="8"></div>
    </div>`

    container.outerHTML = newContainer;
    container.style.display = "grid";
    player1 = 0;
    player2 = 0;
    arrayCajas = [0,0,0,0,0,0,0,0,0];
    points = 0;
    
    cajas = document.querySelectorAll(".box");
    
    for (let i = 0; i < cajas.length; i++) {
    const element = cajas[i];
    element.addEventListener("click", mostrarImg);

    if(language == "ingles"){
        turnTitle.innerHTML = "It's player 1's turn"
    } else if (language == "portugues") {
        turnTitle.innerHTML = "É a vez do jogador 1..."
    } else if (language == "spain") {
        turnTitle.innerHTML = "Es turno del usuario 1"
    }
}
}

buttonModal.addEventListener("click", restartGame)
butttonRestart.addEventListener("click", restartGame)

const buttonSpain = document.querySelector(".button-spain");
const buttonBrazil = document.querySelector(".button-brazil");
const buttonUsa = document.querySelector(".button-usa");

function spain(){
    const label1 = document.querySelector(".label-1");
    const label2 = document.querySelector(".label-2");

    label1.innerHTML = "Elige un personaje (Usuario 1):";
    label2.innerHTML = "Elige un personaje (Usuario 2):";

    const option1 = document.querySelector(".option-1");
    const option2 = document.querySelector(".option-2");

    option1.innerHTML = "Escoge...";
    option2.innerHTML = "Escoge..."

    const buttonStart = document.querySelector(".btn");
    buttonStart.innerHTML = "Comenzar";

    butttonRestart.innerHTML = "Reiniciar";
    language = "spain"

    turnTitle.innerHTML = "Es turno del usuario 1";
    buttonModal.innerHTML = "Jugar de nuevo";

    const copyright = document.querySelector(".copyright");
    copyright.innerHTML = `Hecho por <a href="https://www.instagram.com/wilker31vivas/" target="_blank" class="copyright-a">Wilker</a>`
}

function brazil(){
    const label1 = document.querySelector(".label-1");
    const label2 = document.querySelector(".label-2");

    label1.innerHTML = "Escolha um personagem (usuário 1)";
    label2.innerHTML = "Escolha um personagem (usuário 2)";

    const option1 = document.querySelector(".option-1");
    const option2 = document.querySelector(".option-2");

    option1.innerHTML = "Escolher...";
    option2.innerHTML = "Escolher..."

    const buttonStart = document.querySelector(".btn");
    buttonStart.innerHTML = "Começar";

    butttonRestart.innerHTML = "Reiniciar";
    language = "portugues"

    turnTitle.innerHTML = "É a vez do jogador 1...";
    buttonModal.innerHTML = "Joga de novo";

    const copyright = document.querySelector(".copyright");
    copyright.innerHTML = `Feito por <a href="https://www.instagram.com/wilker31vivas/" target="_blank" class="copyright-a">Wilker</a>`
}

function usa(){
    const label1 = document.querySelector(".label-1");
    const label2 = document.querySelector(".label-2");

    label1.innerHTML = "Choose a character (User 1):";
    label2.innerHTML = "Choose a character (User 2):";

    const option1 = document.querySelector(".option-1");
    const option2 = document.querySelector(".option-2");

    option1.innerHTML = "Choose...";
    option2.innerHTML = "Choose..."

    const buttonStart = document.querySelector(".btn");
    buttonStart.innerHTML = "Start";

    butttonRestart.innerHTML = "Restart";
    language = "ingles";

    turnTitle.innerHTML = "It's player 1's turn";
    buttonModal.innerHTML = "Play again"

    const copyright = document.querySelector(".copyright");
    copyright.innerHTML = `Made by <a href="https://www.instagram.com/wilker31vivas/" target="_blank" class="copyright-a">Wilker</a>`
}

buttonSpain.addEventListener("click",spain);
buttonBrazil.addEventListener("click",brazil);
buttonUsa.addEventListener("click", usa);