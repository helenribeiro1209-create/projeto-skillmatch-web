export default async function fetchVagas() {
  const dataURL = "./assets/data/vagas.json";

  try {
    const response = await fetch(dataURL);

    if (!response.ok) {
      throw new Error("Não foi possível carregar as vagas.");
    }

    const vagas = await response.json();

    return vagas;
  } catch (error) {
    console.error(error);

    throw new Error("Erro ao carregar o catálogo de vagas.");
  }
}