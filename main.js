// FUNÇÃO GENÉRICA QUE TOCA O SOM DA TECLA
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
} 

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//estrutura de repetição while = enquanto
while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = tocaSom;
    //contador = contador + 1;
    contador++;

    console.log(contador);
}