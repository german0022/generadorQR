const input = document.getElementById("input-todo")
const container_todo = document.querySelector(".target-todos")
const btn_addtodo = document.getElementById("buton-add-todo")
const contadorElement = document.getElementById("contadorTareas");

window.onload = () => {
    mostrarTareas();
    actualizarContadorTareas();
};

const actualizarContadorTareas = () => {
    // Obtener las tareas almacenadas en el localStorage
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    // Calcular el número de tareas pendientes
    const tareasPendientes = tareas.length;

    // Actualizar el contenido del elemento en el HTML con el contador
    const contadorElement = document.getElementById("contadorTareas");
    contadorElement.textContent = `Pendientes: ${tareasPendientes}`;
};

const guardarTareas = () =>{
    const tarea = {
        input_tarea: input.value
    };
    if (localStorage.getItem("tareas") === null){
        let arreglo = [];
        arreglo.push(tarea);
        localStorage.setItem("tareas",JSON.stringify(arreglo));
    }else{
        let obtener = JSON.parse(localStorage.getItem("tareas"));
        obtener.push(tarea);
        localStorage.setItem("tareas",JSON.stringify(obtener));
    }
    mostrarTareas();
    input.value = "";
    actualizarContadorTareas();
    
};

const mostrarTareas = () =>{
    let tareas_obtenidas = JSON.parse(localStorage.getItem("tareas"));
    container_todo.innerHTML = "";
    for (let i = 0; i < tareas_obtenidas.length; i++) {
        let input = tareas_obtenidas[i].input_tarea;
        container_todo.innerHTML += `
        <div>
            <li class="todo" ondblclick="eliminarTarea('${input}')">${input}</li>
        </div>
        
        `;
    }
    
}

const eliminarTarea = (tarea) => {
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    for (let i = 0; i < tareas.length; i++) {
        if(tarea === tareas[i].input_tarea){
            tareas.splice(i,1);
        }
        
    }
    localStorage.setItem("tareas",JSON.stringify(tareas));
    mostrarTareas();
    actualizarContadorTareas();
}



btn_addtodo.addEventListener("click", () => {
    if(input.value == "" || input.value.trim() == ""){
        window.alert("Input vacio, ingrese datos")

    }else{
        guardarTareas();
    }
});