
const { ordenarLista } = require('./main.js');

describe("Teste lista 01", () => {
  it("Teste", () => {
    let entrada = ["zebra", "zebra", "cálice", "borboleta", "cálice", "cálice"];
    let resultadoEsperado = ["borboleta", "cálice", "cálice", "cálice", "zebra", "zebra"];
    let saida = ordenarLista(entrada);
    console.log(saida);
    expect(saida).toEqual(resultadoEsperado);
  });
});
