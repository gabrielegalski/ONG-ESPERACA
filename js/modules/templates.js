// js/modules/templates.js
import { obterVoluntarios } from "./storage.js";

// 1. Tela de Início
export function renderInicio() {
  return `
    <div class="p-5 mb-4 bg-light rounded-3 shadow-sm text-center">
      <h1 class="display-5 fw-bold text-success">ONG Esperança 💚</h1>
      <p class="lead mt-3">Promovendo acolhimento, cidadania e transformação social em nossa comunidade.</p>
      <hr class="my-4">
      <p>Nossa missão é conectar corações voluntários a projetos de alto impacto social.</p>
      <a href="#cadastro" class="btn btn-success btn-lg mt-2">Quero ser Voluntário</a>
    </div>
  `;
}

// 2. Tela de Projetos
export function renderProjetos() {
  return `
    <section>
      <h2 class="text-center mb-4 text-success">Nossos Projetos Sociais</h2>
      <div class="row g-4">
        <div class="col-12 col-md-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <h5 class="card-title text-success">🥖 Mesa Solidária</h5>
              <p class="card-text">Distribuição semanal de refeições e cestas básicas para famílias em vulnerabilidade.</p>
            </div>
            <div class="card-footer bg-transparent border-0">
              <span class="badge bg-success">Comunidade</span>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <h5 class="card-title text-success">📚 Futuro na Escola</h5>
              <p class="card-text">Reforço escolar, alfabetização e incentivo à leitura para crianças e jovens da periferia.</p>
            </div>
            <div class="card-footer bg-transparent border-0">
              <span class="badge bg-primary">Educação</span>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <h5 class="card-title text-success">🧶 Mãos que Criam</h5>
              <p class="card-text">Oficinas gratuitas de artesanato e costura voltadas à geração de renda para mães solo.</p>
            </div>
            <div class="card-footer bg-transparent border-0">
              <span class="badge bg-warning text-dark">Capacitação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 3. Tela de Cadastro com Validação e Feedback
export function renderCadastro() {
  const voluntarios = obterVoluntarios();

  // Gera as linhas da lista de voluntários já salvos
  const listaHtml =
    voluntarios.length > 0
      ? voluntarios
          .map(
            (v) => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>${v.nome}</strong> <br>
            <small class="text-muted">${v.email} | ${v.telefone}</small>
          </div>
          <span class="badge bg-success rounded-pill">Ativo</span>
        </li>
      `,
          )
          .join("")
      : '<li class="list-group-item text-muted text-center">Nenhum voluntário cadastrado ainda.</li>';

  return `
    <div class="row g-4 justify-content-center">
      <!-- Coluna do Formulário -->
      <div class="col-12 col-md-6">
        <div class="card p-4 shadow-sm border-0">
          <h3 class="card-title mb-3 text-success">Cadastro de Voluntários</h3>
          
          <!-- Área de Feedback ao Usuário -->
          <div id="mensagemFeedback"></div>

          <form id="formVoluntario" novalidate>
            <div class="mb-3">
              <label for="nome" class="form-label">Nome Completo</label>
              <input type="text" class="form-control" id="nome" placeholder="Digite seu nome completo" required>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="email" placeholder="nome@exemplo.com" required>
            </div>

            <div class="mb-3">
              <label for="telefone" class="form-label">Telefone (WhatsApp)</label>
              <input type="tel" class="form-control" id="telefone" placeholder="(00) 00000-0000" required>
            </div>

            <button type="submit" class="btn btn-success w-100">Confirmar Inscrição</button>
          </form>
        </div>
      </div>

      <!-- Coluna da Lista de Voluntários Salvos -->
      <div class="col-12 col-md-6">
        <div class="card p-4 shadow-sm border-0">
          <h4 class="card-title mb-3 text-secondary">Voluntários Cadastrados</h4>
          <ul id="listaVoluntarios" class="list-group list-group-flush">
            ${listaHtml}
          </ul>
        </div>
      </div>
    </div>
  `;
}
