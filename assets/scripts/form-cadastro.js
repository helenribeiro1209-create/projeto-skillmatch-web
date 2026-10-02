const formCadastro = document.getElementById("form-cadastro");

export default function registerForm() {
  formCadastro.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const position = document.getElementById("position").value;
    const skills = document
      .getElementById("skills")
      .value.split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);
    const experienceTime = document.getElementById("experience-time").value;
    const education = document.getElementById("education").value;
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;

    console.log("Nome:", name);
    console.log("E-mail:", email);
    console.log("Cargo desejado:", position);
    console.log("Habilidades:", skills);
    console.log("Tempo de experiência:", experienceTime);
    console.log("Formação:", education);
    console.log("Estado:", state);
    console.log("Cidade:", city);
  });
}
