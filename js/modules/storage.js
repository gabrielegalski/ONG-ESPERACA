// js/modules/storage.js

const CHAVE_VOLUNTARIOS = "ong_esperanca_voluntarios";

// Busca os voluntários salvos ou retorna uma lista vazia se não houver nenhum
export function obterVoluntarios() {
  const dados = localStorage.getItem(CHAVE_VOLUNTARIOS);
  return dados ? JSON.parse(dados) : [];
}

// Adiciona um novo voluntário à lista e salva no localStorage
export function salvarVoluntario(voluntario) {
  const lista = obterVoluntarios();
  lista.push(voluntario);
  localStorage.setItem(CHAVE_VOLUNTARIOS, JSON.stringify(lista));
}
