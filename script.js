const input = document.getElementById("input-search");
const btnAdd = document.getElementById("btn-add");
const tasksContainer = document.getElementById("tasks");

function adicionarElemento() {
  const valor = input.value.trim(); // remove espaços antes/depois

  if (valor === "") {
    alert("Digite uma tarefa antes de adicionar.");
    return; // interrompe a função
  }

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const texto = document.createTextNode(valor);
  const image = document.createElement("img");
  const inputCheckbox = document.createElement("input");

  image.src = "../../assets/icon delete.svg";
  image.alt = "delete icon";
  image.classList.add("delete-icon");

  // evento para deletar a task
  image.addEventListener("click", () => {
    li.remove();
    if (ul.children.length === 0) {
      ul.remove();

      mostrarAviso("O item foi removido com sucesso!");
    }
  });

  inputCheckbox.type = "checkbox";

  li.appendChild(inputCheckbox);
  li.appendChild(texto);
  li.appendChild(image);
  li.classList.add("task");

  ul.appendChild(li);
  tasksContainer.appendChild(ul);

  input.value = ""; // limpa o campo
}

function mostrarAviso(mensagem) {
  const aviso = document.createElement("div");
  const icon = document.createElement("img");
  const texto = document.createElement("span");

  icon.src = "../../assets/icon.svg";
  icon.alt = "aviso icon";

  texto.textContent = mensagem;

  aviso.appendChild(icon);
  aviso.appendChild(texto);

  aviso.classList.add("aviso");
  tasksContainer.appendChild(aviso);

  setTimeout(() => {
    aviso.remove();
  }, 3000);
}

btnAdd.addEventListener("click", adicionarElemento);
