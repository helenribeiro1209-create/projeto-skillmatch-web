const formCadastro = document.getElementById("form-cadastro");

const formMessage = document.getElementById("form-message");

export default function registerForm(callback) {
  // Recupera o perfil salvo anteriormente
  const perfilSalvo = localStorage.getItem("perfilCandidato");

  if (perfilSalvo) {
    const candidato = JSON.parse(perfilSalvo);

    preencherFormulario(candidato);
  }

  formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();

    limparMensagem();

    // Verifica se os campos obrigatórios estão preenchidos corretamente
    if (!formCadastro.checkValidity()) {
      formMessage.textContent = "Preencha corretamente os campos obrigatórios.";

      formCadastro.reportValidity();

      return;
    }

    // Converte as habilidades digitadas em um array
    const skills = document
      .getElementById("skills")
      .value.split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

    // Verifica se existe pelo menos uma habilidade
    if (skills.length === 0) {
      formMessage.textContent = "Informe pelo menos uma habilidade.";

      return;
    }

    // Cria o objeto candidato
    const candidato = {
      nome: document.getElementById("name").value.trim(),

      email: document.getElementById("email").value.trim(),

      areaInteresse: document.getElementById("interest-area").value.trim(),

      cargo: document.getElementById("position").value.trim(),

      habilidades: skills,

      experiencia: Number(document.getElementById("experience-time").value),

      formacao: document.getElementById("education").value.trim(),

      estado: document.getElementById("state").value.trim(),

      cidade: document.getElementById("city").value.trim(),
    };

    // Salva o perfil no localStorage
    localStorage.setItem("perfilCandidato", JSON.stringify(candidato));

    formMessage.textContent = "Perfil salvo com sucesso!";

    // Só executa o motor quando o formulário estiver válido
    if (callback) {
      callback(candidato);
    }
  });
}

// Preenche o formulário com os dados salvos
function preencherFormulario(candidato) {
  document.getElementById("name").value = candidato.nome || "";

  document.getElementById("email").value = candidato.email || "";

  document.getElementById("interest-area").value =
    candidato.areaInteresse || "";

  document.getElementById("position").value = candidato.cargo || "";

  document.getElementById("skills").value =
    candidato.habilidades?.join(", ") || "";

  document.getElementById("experience-time").value =
    candidato.experiencia ?? "";

  document.getElementById("education").value = candidato.formacao || "";

  document.getElementById("state").value = candidato.estado || "";

  document.getElementById("city").value = candidato.cidade || "";
}

// Limpa a mensagem de feedback
function limparMensagem() {
  formMessage.textContent = "";
}
