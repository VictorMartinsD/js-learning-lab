// Seleção de elementos
const input = document.querySelector("#name");
const addBtn = document.querySelector("#add-btn");
const lockBtn = document.querySelector("#lock-btn");
const helpIcon = document.querySelector("#help-icon");
const helpText = document.querySelector("#help-text");
const guestList = document.querySelector("#guest-list");

// 1. Preparação e Feedback de Carregamento
window.addEventListener("load", () => {
  console.log("Sistema de Check-in pronto!");
  input.setAttribute("placeholder", "Digite o nome do convidado...");
});

// 2. O Botão de Bloqueio (Segurança)
lockBtn.addEventListener("click", () => {
  input.setAttribute("disabled", true);
  lockBtn.style.backgroundColor = "red";
  lockBtn.textContent = "Registro Bloqueado";
});

// 3. Validação Visual Dinâmica (Exemplo com Toggle)
helpIcon.addEventListener("click", () => {
  // Alterna a exibição da mensagem de ajuda
  helpText.classList.toggle("hide");
});

// Simulação manual de erro (basta descomentar abaixo para testar)
// input.classList.add("input-error");

// 4. Criação Dinâmica de Convidados
addBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Impede o recarregamento da página

  // Criando os elementos
  const newGuest = document.createElement("li");
  const guestName = document.createElement("span");

  // Definindo conteúdo e classes
  guestName.textContent = "Diego Fernandes";
  newGuest.classList.add("guest");

  // Montando a estrutura e inserindo no topo (prepend)
  newGuest.append(guestName);
  guestList.prepend(newGuest);
});

// 5. Controle de Scroll da Lista
guestList.addEventListener("scroll", () => {
  console.log("Distância do topo:", guestList.scrollTop);

  // Desafio de Navegação: Volta ao topo suave se passar de 300px
  if (guestList.scrollTop > 300) {
    guestList.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

// 6. Identificação de Alvo (Evento Global)
addEventListener("click", (event) => {
  console.log("Elemento clicado:", event.target);
  console.log("Conteúdo do texto:", event.target.textContent);
});
