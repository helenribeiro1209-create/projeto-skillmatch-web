import fetchVagas from "./load-vagas.js";

console.log("Hello, World!");

const vagas = await fetchVagas();

console.log(vagas);
