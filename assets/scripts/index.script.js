import fetchVagas from "./load-vagas.js";
import registerForm from "./form-cadastro.js";

import {
  Vaga,
  VagaFrontEnd,
  analisarVaga,
  processarVagas,
  encontrarMaiorCompatibilidade,
  gerarRecomendacoes,
} from "./motor.js";

// CARREGAR VAGAS

const dadosVagas = await fetchVagas();

// TRANSFORMAR DADOS DO JSON EM OBJETOS DO MOTOR

const vagas = dadosVagas.map((dados) => {
  const cargo = dados.cargo.toLowerCase();

  if (cargo.includes("front")) {
    return new VagaFrontEnd(dados);
  }

  return new Vaga(dados);
});

// RECEBER O CANDIDATO DO FORMULÁRIO

registerForm((candidato) => {
  // PROCESSAR VAGAS

  const resultados = processarVagas(vagas, candidato, analisarVaga);

  console.log("Resultados:", resultados);

  // MELHOR VAGA

  const melhorVaga = encontrarMaiorCompatibilidade(resultados);

  console.log("Melhor vaga:", melhorVaga);

  // RECOMENDAÇÕES

  const recomendacoes = gerarRecomendacoes(resultados);

  console.log("Recomendações:", recomendacoes);
});
