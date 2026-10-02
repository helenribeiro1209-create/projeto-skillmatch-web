// CLASSE VAGA
// Programação Orientada a Objetos

class Vaga {
  constructor(dados) {
    this.id = dados.id;
    this.empresa = dados.empresa;
    this.cargo = dados.cargo;
    this.requisitos = dados.requisitos;
    this.salario = dados.salário;
    this.modalidade = dados.modalidade;
    this.localizacao = dados.localização;
    this.tipoContrato = dados.tipo_contrato;
    this.beneficios = dados.benefícios;
  }

  // Cálculo de compatibilidade
  calcularCompatibilidade(habilidades) {
    const habilidadesCandidato = habilidades.map(
      (habilidade) => habilidade.toLowerCase()
    );

    const encontradas = this.requisitos.filter(
      (requisito) =>
        habilidadesCandidato.includes(requisito.toLowerCase())
    );

    const faltantes = this.requisitos.filter(
      (requisito) =>
        !habilidadesCandidato.includes(requisito.toLowerCase())
    );

    const percentual =
      this.requisitos.length > 0
        ? Math.round(
            (encontradas.length / this.requisitos.length) * 100
          )
        : 0;

    return {
      percentual,
      encontradas,
      faltantes,
    };
  }
}

// HERANÇA
// Vaga especializada em Frontend

class VagaFrontEnd extends Vaga {
  constructor(dados) {
    super(dados);

    this.stack = "Frontend";
  }

  getRotulo() {
    return `${this.cargo} - ${this.stack}`;
  }
}

// CLASSIFICAÇÃO

function classificarCompatibilidade(percentual) {
  if (percentual >= 80) {
    return "Alta compatibilidade";
  } else if (percentual >= 50) {
    return "Média compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
}

// CLOSURE

function criarContadorAnalises() {
  let quantidade = 0;

  return function () {
    quantidade++;

    return quantidade;
  };
}

const contarAnalises = criarContadorAnalises();

// ANALISAR VAGA

function analisarVaga(vaga, candidato) {
  const numeroAnalise = contarAnalises();

  const resultado = vaga.calcularCompatibilidade(
    candidato.habilidades
  );

  const classificacao = classificarCompatibilidade(
    resultado.percentual
  );

  return {
    vaga,
    numeroAnalise,
    percentual: resultado.percentual,
    classificacao,
    encontradas: resultado.encontradas,
    faltantes: resultado.faltantes,
  };
}

// CALLBACK

function processarVagas(vagas, candidato) {
  return vagas.map((vaga) => analisarVaga(vaga, candidato));
}

// MELHOR VAGA

function encontrarMaiorCompatibilidade(resultados) {
  if (resultados.length === 0) {
    return null;
  }

  return resultados.reduce((maior, atual) => {
    if (atual.percentual > maior.percentual) {
      return atual;
    }

    return maior;
  });
}

// RECOMENDAÇÕES DE ESTUDO

function gerarRecomendacoes(resultados) {
  const frequenciaHabilidades = resultados.reduce(
    (acumulador, resultado) => {
      resultado.faltantes.forEach((habilidade) => {
        if (acumulador[habilidade]) {
          acumulador[habilidade]++;
        } else {
          acumulador[habilidade] = 1;
        }
      });

      return acumulador;
    },
    {}
  );

  return Object.entries(frequenciaHabilidades).sort(
    (a, b) => b[1] - a[1]
  );
}

// EXPORTAÇÕES
//  MÓDULOS ES

export {
  Vaga,
  VagaFrontEnd,
  classificarCompatibilidade,
  criarContadorAnalises,
  analisarVaga,
  processarVagas,
  encontrarMaiorCompatibilidade,
  gerarRecomendacoes,
};
