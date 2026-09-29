export default async function fetchVagas() {
  const dataURL = "./assets/data/vagas.jso";

  try {
    const response = await fetch(dataURL);
    const vagas = await response.json();

    return vagas;
  } catch (error) {
    return {
      message: "Error ao carregar as vagas:",
      error,
    };
  }
}
