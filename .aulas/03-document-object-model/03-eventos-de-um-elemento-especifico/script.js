const textInput = document.querySelector("#username");
const addBtn = document.querySelector("#add-btn");
const lockBtn = document.querySelector("#lock-btn");
const helpBtn = document.querySelector("#help-icon");
const helpText = document.querySelector("#help-text");
const ul = document.querySelector("#guest-list");

window.addEventListener("load", () => {
  console.log("Sistema de Check-in pronto!");
  textInput.placeholder = "Digite o nome do convidado...";
});

lockBtn.addEventListener("click", () => {
  textInput.disabled = true;
  lockBtn.style.backgroundColor = "red";
  lockBtn.textContent = "Registro Bloqueado";
});

addBtn.addEventListener("click", () => {
  if (textInput.value === "") {
    textInput.classList.add("input-error");
  } else {
    textInput.classList.remove("input-error");
  }
});

helpBtn.addEventListener("click", () => {
  helpText.classList.toggle("hide");
});

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (textInput.value !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = textInput.value;
    li.classList.add("guest");

    li.append(span);
    ul.prepend(li);

    textInput.value = "";
  }
});

ul.addEventListener("scroll", () => {
  console.log("Distância do topo:", ul.scrollTop);

  if (ul.scrollTop > 300) {
    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

addEventListener("click", (event) => {
  console.log("Elemento clicado:", event.target);
  console.log("Conteúdo do texto:", event.target.textContent);
});
