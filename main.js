// FUNÇÃO GENÉRICA QUE TOCA O SOM DA TECLA
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
} 

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//estrutura de repetição while = enquanto
while (contador < listaDeTeclas.length) {
    //criando uma função anônima
    listaDeTeclas[contador].onclick = function() {
        tocaSom('#som_tecla_pom');
    }
    //contador = contador + 1;
    contador++;

    console.log(contador);
}