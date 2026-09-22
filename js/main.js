// js/main.js
import {
  renderInicio,
  renderProjetos,
  renderCadastro,
} from "./modules/templates.js";
import { salvarVoluntario } from "./modules/storage.js";

// Mapeamento das rotas da SPA
const rotas = {
  "": renderInicio,
  "#inicio": renderInicio,
  "#projetos": renderProjetos,
  "#cadastro": renderCadastro,
};

const app = document.querySelector("#app");

// Roteador central que injeta o conteúdo sem recarregar a tela
function roteador() {
  const hash = window.location.hash;
  const pagina = rotas[hash] || renderInicio;

  app.innerHTML = pagina();

  // Se a página atual for a de cadastro, ligamos os eventos do formulário
  if (hash === "#cadastro") {
    configurarFormulario();
  }
}

// Validação e lógica do formulário com feedback
function configurarFormulario() {
  const form = document.querySelector("#formVoluntario");
  const feedback = document.querySelector("#mensagemFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefone = document.querySelector("#telefone").value.trim();

    // Validação simples dos dados
    if (!nome || !email || !telefone) {
      feedback.innerHTML = `
        <div class="alert alert-danger" role="alert">
          Por favor, preencha todos os campos obrigatórios!
        </div>
      `;
      return;
    }

    // Salva o voluntário no LocalStorage
    salvarVoluntario({ nome, email, telefone });

    // Feedback de sucesso para o usuário
    feedback.innerHTML = `
      <div class="alert alert-success" role="alert">
        Voluntário cadastrado com sucesso! Bem-vindo à equipe 💚
      </div>
    `;

    // Limpa os campos digitados e atualiza a view
    form.reset();
    setTimeout(() => {
      roteador();
    }, 1200);
  });
}

// Fica escutando as mudanças na URL (#) e no carregamento da página
window.addEventListener("hashchange", roteador);
window.addEventListener("DOMContentLoaded", roteador);
