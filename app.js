const tasK = document.getElementById("task");
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
console.log(taskInput);
const clear = document.querySelector("a");
console.log(clear);
form.addEventListener("submit", function addTask(e) {
  if (taskInput.value === "") {
    alert("s'il vous avez ajoutez une tache");
  }

  const li = document.createElement("li");

  li.className = "collection-item";

  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement("a");

  link.className = "delete-item secondary-content";

  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  link.addEventListener("click", () => {
    if (confirm("voulez vous vraiment supprimer ceci")) {
      console.log(`YES ${li.remove()}`);
    } else {
      console.log("NO");
    }
  });
  clear.addEventListener("click", function (e) {
    taskList.innerText = "";
  });
  console.log(link);
  
  taskInput.value = "";
  taskList.appendChild(li);

  e.preventDefault();
});
