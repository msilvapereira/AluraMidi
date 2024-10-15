// FUNÇÃO GENÉRICA QUE TOCA O SOM DA TECLA
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
} 

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//estrutura de repetição while = enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    //criando uma função anônima, as funções anônimas são úteis quando queremos executar alguma coisa uma única vez ou em apenas um lugar. 
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    //contador = contador + 1;
    contador++;
}