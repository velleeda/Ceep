import BotaoConclui from "./components/concluiTarefa.js";
import BotaoDeleta from "./components/deletaTarefa.js";

const criarTarefa = (event) => {
  event.preventDefault();
  input.value = "";

  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;
  const conteudo = `<p class="content">${valor}</p>`;
  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  lista.appendChild(tarefa);
};

const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener("click", criarTarefa);
