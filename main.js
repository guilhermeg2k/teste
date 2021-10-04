/*
O intuito deste desafio é criar um projeto que receba uma 
lista de palavras e retorne-as ordenadas por ordem alfabética.

Entrada: [“zebra”, “cálice”, “borboleata” ]
Saída:  [“borboleata”, “cálice”, “zebra”]

*/

let entrada = ["zebra", "cálice", "borboleta" ];

function ordenarLista(lista){
  let saida = [];
  for (let i = 0; i < lista.length; i++){
    let aux = 0;
    for(let j = 0; j < lista.length; j++){
      if (lista[i] > lista[j]){
        aux++;
      }
    }
    let repeticoes = 0;
    while(saida[aux + repeticoes] != undefined){
      repeticoes++;
    }
    saida[aux + repeticoes] = lista[i];
  }
  return saida;
}

module.exports = {
  ordenarLista
};