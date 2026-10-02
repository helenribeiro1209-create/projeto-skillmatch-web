import fetchVagas from "./load-vagas.js";
import registerForm from "./form-cadastro.js";
import { Vaga } from "./motor.js";

const dadosVagas = await fetchVagas();

const vagas = dadosVagas.map((dados) => {
  return new Vaga(dados);
});

//console.log("Vagas carregando:", vagas);

registerForm();
