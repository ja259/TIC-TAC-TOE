/* javascript.js */

const Gameboard = (() => {
    let gameboard = ["", "","", "", "", "", "", "", ""]
     
    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id=sqaure-${index}">${square}</div>`
        })
        document.querySelector("#gameboard").innerHTML = boardHTML;
    }
    
    return{
        render,
    }
}) ();

   const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
   }

    const Game = (() => {
           let players = [];
           let currentPlayerIndex;
           let gameOver;

           const start = () => {
            players = [
                createPlayer(document.querySelector("#player1").ariaValueMax, "X"),
                createPlayer(document.querySelector("#player2").ariaValueMax, "O")
            ]
            currentPlayerIndex = 0;
            gameOver = false;
            Gameboard.render();
           }
           return {
            start,
           }
    })();

const startButton = document.querySelector("#start-button");
startButton.addEventListener('click',() => {
    Game.start();
})