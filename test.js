// variables et selections
// const form = document.querySelector('#task-form');
// const taskInput = document.querySelector('#task');
// const taskList = document.querySelector('.collection');



// functions callbacks
// function addTask(e)
// // évènements
// form.addEventListener('submit',function addTask(e){
//     if(taskInput.value === ""){
//         taskInput.style.borderBottom = "1px solid red"
//    document.querySelectorAll('small').forEach((i)=>{
//        i.classList.add("warning");   
//    })
//    }else{
//     const li = document.createElement('li');
//     li.className = "collection-item";
//     li.appendChild(document.createTextNode(taskInput.value));
//     const link = document.createElement("a");
//     link.className = "delete-item secondary-content";
//     link.innerHTML = '<i class="fa fa-remove"></i>';
//     li.appendChild(link);
//     taskList.appendChild(li);
//    }
   
//      e.preventDefault();
// })

const form = document.querySelector("#task-form");
const taskInput = document.querySelector('#task');
const taskTitle = document.querySelector('.collection');
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

form.addEventListener('submit',(e)=>{
    if(taskInput.value === ""){
        taskInput.style.borderBottom = "1px solid red";
        form.querySelectorAll("small").forEach((i)=>{
            i.classList.add("warning");
        })
    } else{
        const li = document.createElement("li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(taskInput.value));
        console.log(li);
        link = document.createElement('a');
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskTitle.appendChild(li);
    }
    // vider un taskInput a la soumission du formulaire
    storeTaskInLocalStorage(taskInput.value);
    taskInput.value="";
    e.preventDefault();
});
// vider taskInput au chargement de la page
document.addEventListener("DOMContentLoaded", ()=>{
    taskInput.value="";
})
// stocker dans local storage
// maintenir les données ou taches sur la page
// ETAPE1: conserver les taches dans le lacal storage

function storeTaskInLocalStorage(inputData){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));

    }
    tasks.push(inputData);
    localStorage.setItem("tasks",JSON.stringify(tasks));

}
// 

document.addEventListener("DOMContentLoaded",()=>{
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));

    }
    
    // créer la structure de l'élement a afficher
    tasks.forEach((i)=>{
        const li = document.createElement("li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(i));
        link = document.createElement('a');
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskTitle.appendChild(li);
    });

});