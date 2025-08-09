const input = document.getElementById("input-search");
const btnAdd = document.getElementById("btn-add");
const tasksContainer = document.getElementById("tasks");

function adicionarElemento() {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const texto = document.createTextNode(input.value);
  const image = document.createElement("img");
  const inputCheckbox = document.createElement("input");

  image.src = "../../assets/icon delete.svg";
  image.alt = "delete icon";
  image.classList.add("delete-icon");

  inputCheckbox.type = "checkbox";

  li.appendChild(inputCheckbox);
  li.appendChild(texto);
  li.appendChild(image);
  li.classList.add("task");

  ul.appendChild(li);

  tasksContainer.appendChild(ul);
}

btnAdd.addEventListener("click", adicionarElemento);
