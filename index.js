window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile')); // casillas del 3 en ralla
    const playerDisplay = document.querySelector('.display-player'); // display del turno del jugador, modificadlo para mostrar el turno del jugador
    const resetButton = document.querySelector('#reset'); // boton reset
    const announcer = document.querySelector('.announcer'); // texto donde mostraremos el resultado de la partida

    let board = ['', '', '', '', '', '', '', '', '']; // Estructura de datos para el tablero
    let currentPlayer = 'X'; // Jugador actual
    let isGameActive = true; // Variable para cotrolar si el juego ha finalizado

    /*
        Indices en el tablero
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

});