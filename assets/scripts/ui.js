// RENDERIZAÇÃO DAS VAGAS

export function renderizarVagas(resultados) {
  const container = document.getElementById("vagas-container");

  container.innerHTML = "";

  resultados.forEach((resultado) => {
    const card = document.createElement("article");

    card.classList.add("vaga-card");

    card.innerHTML = `
      <h3>${resultado.vaga.empresa}</h3>

      <h4>${resultado.vaga.getRotulo()}</h4>

      <p>
        <strong>Compatibilidade:</strong>
        ${resultado.percentual}%
      </p>

      <p>
        <strong>Classificação:</strong>
        ${resultado.classificacao}
      </p>

      <p>
        <strong>Habilidades encontradas:</strong>
        ${
          resultado.encontradas.length > 0
            ? resultado.encontradas.join(", ")
            : "Nenhuma"
        }
      </p>

      <p>
        <strong>Habilidades faltantes:</strong>
        ${
          resultado.faltantes.length > 0
            ? resultado.faltantes.join(", ")
            : "Nenhuma"
        }
      </p>

      <p>
        <strong>Salário:</strong>
        ${resultado.vaga.salario}
      </p>

      <p>
        <strong>Modalidade:</strong>
        ${resultado.vaga.modalidade}
      </p>

      <p>
        <strong>Localização:</strong>
        ${resultado.vaga.localizacao}
      </p>

      <p>
        <strong>Contrato:</strong>
        ${resultado.vaga.tipoContrato}
      </p>
    `;

    container.appendChild(card);
  });
}
