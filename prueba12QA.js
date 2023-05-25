function aleatorio(min,max){        // funcion para hallar un numero aleatorio entre 1 y 6 que se usara para la variable del dado
    return Math.floor(Math.random()*(max-min+1)+min);
}


function serpiente(){
    const tablero = 25;
    let recorrido = 1;
    while (recorrido<tablero){  
        let dado=aleatorio(1,6)  // se lanza el dado del juego
        console.log ('Dado arroja',dado)
        recorrido = recorrido + dado;  //se guarda el recorrido que lleva hasta el momento
        console.log ('Jugador avanza a la casilla', recorrido)
        switch(recorrido){          // se tiene en cuenta los casos importantes con respecto a las escaleras y a las serpientes
            case 3:
                recorrido = 11    
                console.log('Subes por la escalera al cuadro ', recorrido)
                break;
            case 6:
                recorrido = 17    
                console.log('Subes por la escalera al cuadro ', recorrido)
                break;
            case 9:
                recorrido = 18    
                console.log('Subes por la escalera al cuadro ', recorrido)
                break;
            case 10:
                recorrido = 12    
                console.log('Subes por la escalera al cuadro ', recorrido)
                break;
            case 14:
                recorrido = 4    
                console.log('Desciende al cuadro ', recorrido)
                break;
            case 19:
                recorrido = 8    
                console.log('Desciende al cuadro ', recorrido)
                break;
            case 22:
                recorrido = 20    
                console.log('Desciende al cuadro ', recorrido)
                break;
            case 24:
                recorrido = 16    
                console.log('Desciende al cuadro ', recorrido)
                break;
            }
    }
    console.log('Fin del juego') // cuando el recorrido se pasa del tablero, acaba el juego
}

serpiente()
