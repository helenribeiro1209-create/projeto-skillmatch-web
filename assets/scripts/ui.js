/* MENSAGENS DA INTERFACE */

export function mostrarMensagem(mensagem) {
  const container = document.getElementById("vagas-container");

  container.innerHTML = `<p class="mensagem-vagas">${mensagem}</p>`;
}

export function limparMensagem() {
  const container = document.getElementById("vagas-container");

  container.innerHTML = "";
}

/* RENDERIZAÇÃO DAS VAGAS */

export function renderizarVagas(resultados) {
  const container = document.getElementById("vagas-container");

  container.innerHTML = "";

  resultados.forEach((resultado) => {
    const card = document.createElement("article");

    card.classList.add("vaga-card");

    card.innerHTML = `
     <img
    class="logo-empresa"
    src="${resultado.vaga.logo}"
    alt="Logo da empresa ${resultado.vaga.empresa}"
  />

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
  <strong>Experiência:</strong>
  ${resultado.vaga.experiencia}
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

/* MELHOR VAGA */

export function renderizarMelhorVaga(resultado) {
  const container = document.getElementById("melhor-vaga");

  if (!container) {
    return;
  }

  if (!resultado) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
<article class="melhor-vaga-card">

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
    <strong>Modalidade:</strong>
    ${resultado.vaga.modalidade}
  </p>

</article>

`;
}

/* RECOMENDAÇÕES DE ESTUDO */

export function renderizarRecomendacoes(recomendacoes) {
  const container = document.getElementById("recomendacoes-estudo");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (recomendacoes.length === 0) {
    container.innerHTML = `
      <p>
        Você possui todas as habilidades necessárias para as vagas analisadas.
      </p>
    `;

    return;
  }

  const lista = document.createElement("ol");

  recomendacoes.forEach(([habilidade, quantidadeVagas]) => {
    const item = document.createElement("li");

    item.textContent =
      `${habilidade} — necessária em ` + `${quantidadeVagas} vaga(s)`;

    lista.appendChild(item);
  });

  container.appendChild(lista);
}
