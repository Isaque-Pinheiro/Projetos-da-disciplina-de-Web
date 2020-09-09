
const caixaTexto = document.querySelector('.caixa-de-texto');
const botao = document.querySelector('.botao-adiciona');
const listaTarefas = document.querySelector('.lista-tarefas');


botao.addEventListener('click', addLista);
listaTarefas.addEventListener('click', deleteCheck);


function addLista(e) {
    
    e.preventDefault();
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    
    const newTodo = document.createElement("li");
    newTodo.innerText = caixaTexto.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    
    const botaoMarca = document.createElement("button");
    botaoMarca.innerHTML = '<i class = "fas fa-check"></i>';
    botaoMarca.classList.add("complete-btn");
    todoDiv.appendChild(botaoMarca);
    
    const botaoDeleta = document.createElement("button");
    botaoDeleta.innerHTML = '<i class = "fas fa-trash"></i>';
    botaoDeleta.classList.add("trash-btn");
    todoDiv.appendChild(botaoDeleta);
    
    listaTarefas.appendChild(todoDiv);
    
    caixaTexto.value = "";

}

function deleteCheck(e) {
    const item = e.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completa');

    }

}