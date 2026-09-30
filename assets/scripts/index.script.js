import fetchVagas from "./load-vagas.js";
import registerForm from "./form-cadastro.js";

console.log("Hello, World!");

const vagas = await fetchVagas();

console.log(vagas);

registerForm();
