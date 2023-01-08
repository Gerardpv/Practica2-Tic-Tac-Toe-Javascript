    const Casillas = Array.from(document.querySelectorAll('.tile')); // casillas del 3 en ralla
    const resetButton = document.querySelector('#reset'); // boton reset
    const EstatJoc = document.querySelector('#ActualJOC');

    let board = ['', '', '', '', '', '', '', '', '']; // Estructura de datos para el tablero
    let currentPlayer = 'X'; // Jugador actual
    let isGameActive = false; // Variable para cotrolar si el juego ha finalizado

    /*
        Indices en el tablero
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    const FormesGuanyar = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]
    ];

    ComençaPartida();

        function ComençaPartida(){
            Casillas.forEach(tile => tile.addEventListener('click',TileApretada));
            resetButton.addEventListener('click', RestartJoc);
            EstatJoc.textContent = `${currentPlayer}'s torn`;
            isGameActive = true;
        }

        function TileApretada(){
            const NumCasilla = this.getAttribute('NumCas');
            if(board[NumCasilla] != "" || !isGameActive){
            return;
        }

        ActualitzaTile(this, NumCasilla);
        ComprovarGuanyador();

    }

     function ActualitzaTile(tile, index){
        board[index] = currentPlayer;
        tile.textContent = currentPlayer;
     }

     function CanviarDeJugador(){
        currentPlayer = (currentPlayer == "X") ? "0" : "X";
        EstatJoc.textContent = `${currentPlayer}'s torn`;
     }

     function ComprovarGuanyador(){
        let PartidaGuanyada = false;

        for(let i=0; i<FormesGuanyar.length; i++){
            const Proba =  FormesGuanyar[i];

            const tile1 = board[Proba[0]];
            const tile2 = board[Proba[1]];
            const tile3 = board[Proba[2]];

            if((tile1 == "") || (tile2 == "") || (tile3 == "")){
                continue;
            }

            if((tile1 == tile2) && (tile2 == tile3) && (tile1 == tile3)){
                PartidaGuanyada = true;
                break;
            }

        }

        if(PartidaGuanyada){
            EstatJoc.textContent = `${currentPlayer} GUANYA`;
            isGameActive = false;
        }

        else if(!board.includes("")){
            EstatJoc.textContent = `EMPATE`;
            isGameActive = false;
        }

        else{
            CanviarDeJugador();
        }
     }

     function RestartJoc(){
        currentPlayer = "X";
        board = ['', '', '', '', '', '', '', '', ''];
        EstatJoc.textContent = `${currentPlayer}'s torn`;
        Casillas.forEach(tile => tile.textContent = "");
        isGameActive = true;
     }