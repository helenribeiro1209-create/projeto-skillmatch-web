# Projeto para simular compatibilidade com vagas Front-end Junior.

# 💼 Vagas SkillMatch Web

Sistema web desenvolvido para identificar vagas de emprego compatíveis com o perfil profissional do candidato.

## 🎯 Objetivo

O projeto auxilia o candidato na busca por oportunidades, comparando suas habilidades com os requisitos das vagas e apresentando o percentual de compatibilidade.

## ✨ Funcionalidades

- Cadastro e validação do perfil do candidato.
- Área de interesse e habilidades profissionais.
- Persistência do perfil com `localStorage`.
- Carregamento das vagas através de arquivo JSON com `fetch`.
- Cálculo do percentual de compatibilidade.
- Classificação em Alta, Média ou Baixa compatibilidade.
- Identificação de habilidades encontradas e faltantes.
- Exibição da melhor vaga.
- Recomendações de estudo.
- Cards de vagas gerados dinamicamente.
- Interface responsiva e acessível.
- Logos e imagens das empresas fictícias.

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript ES6+
- Flexbox
- JavaScript Modules (`import/export`)
- Programação Orientada a Objetos
- Herança
- Closure
- DOM
- `fetch` / `async/await`
- `localStorage`
- JSON

## 📂 Estrutura principal

```text
projeto-skillmatch-web/
├── assets/
│   ├── data/
│   │   └── vagas.json
│   ├── images/
│   ├── scripts/
│   │   ├── form-cadastro.js
│   │   ├── index.script.js
│   │   ├── load-vagas.js
│   │   ├── motor.js
│   │   └── ui.js
│   └── styles/
│       └── index.style.css
├── index.html
└── README.md
```

## ⚙️ Principais módulos

**`motor.js`**
Contém as regras de negócio, classes, cálculo de compatibilidade, classificação e recomendações.

**`ui.js`**
Responsável pela criação e atualização dos elementos da interface.

**`form-cadastro.js`**
Responsável pela validação do formulário e persistência do perfil.

**`load-vagas.js`**
Responsável pelo carregamento das vagas através do `fetch`.

**`vagas.json`**
Contém os dados das oportunidades disponíveis.

## 📱 Responsividade e acessibilidade

O projeto utiliza HTML semântico, `label` nos campos, `alt` nas imagens, `aria-live`, `meta viewport`, Flexbox e Media Queries para proporcionar uma boa experiência em diferentes dispositivos.

## ▶️ Como executar

1. Clone ou baixe o projeto.
2. Abra a pasta no Visual Studio Code.
3. Execute o `index.html` utilizando o **Live Server**.
4. Acesse o sistema pelo navegador.

O uso de um servidor local é recomendado porque as vagas são carregadas através de `fetch` a partir do arquivo JSON.

## 🚀 Possíveis melhorias

- Integração com banco de dados.
- Cadastro de empresas e novas vagas.
- Filtros por localização, salário e modalidade.
- Sistema de favoritos.
- Autenticação de usuários.
- Integração com uma API de vagas.

## 🎓 Projeto acadêmico

Projeto desenvolvido para aplicar conceitos de **desenvolvimento web, JavaScript, POO, manipulação do DOM, consumo de dados, persistência, acessibilidade e organização modular**.

## Links obrigatórios

● link do repositório público do projeto no GitHub;
https://github.com/helenribeiro1209-create/projeto-skillmatch-web/tree/main

● link de acesso ao quadro Kanban utilizado no projeto (Trello ou similares). Acessível via
link;
https://trello.com/b/kpFlMEWm/projeto-front-end-skillmatch-web

● link de acesso ao vídeo apresentação do projeto (ser possível de visualizar via link). Via
Google Drive ou YouTube como vídeo "não listado";
