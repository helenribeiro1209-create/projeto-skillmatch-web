import fetchVagas from "./load-vagas.js";
import registerForm from "./form-cadastro.js";

import {
  Vaga,
  VagaFrontEnd,
  processarVagas,
  encontrarMaiorCompatibilidade,
  gerarRecomendacoes,
} from "./motor.js";

import {
  renderizarVagas,
  mostrarMensagem,
  renderizarMelhorVaga,
  renderizarRecomendacoes,
} from "./ui.js";

// CARREGAMENTO DAS VAGAS

let vagas = [];
let erroCarregamento = null;

try {
  const dadosVagas = await fetchVagas();

  console.log("Dados recebidos:", dadosVagas);

  if (dadosVagas.length === 0) {
    vagas = [];
  } else {
    vagas = dadosVagas.map((dados) => {
      if (
        dados.cargo.toLowerCase().includes("frontend") ||
        dados.cargo.toLowerCase().includes("front-end")
      ) {
        return new VagaFrontEnd(dados);
      }

      return new Vaga(dados);
    });
  }
} catch (error) {
  console.error(error);

  erroCarregamento = error.message;
  vagas = [];
}

// PROCESSAMENTO DO CANDIDATO

registerForm(async (candidato) => {
  mostrarMensagem("Carregando vagas...");

  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  if (erroCarregamento) {
    mostrarMensagem(erroCarregamento);
    return;
  }

  if (vagas.length === 0) {
    mostrarMensagem("Nada encontrado.");
    return;
  }

  const resultados = processarVagas(vagas, candidato);

  renderizarVagas(resultados);

  const melhorVaga = encontrarMaiorCompatibilidade(resultados);

  renderizarMelhorVaga(melhorVaga);

  const recomendacoes = gerarRecomendacoes(resultados);

  renderizarRecomendacoes(recomendacoes);
});
