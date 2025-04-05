function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    
    //O código abaixo armazena o valor que o usuario escreveu
    let inputTarefa = document.getElementById("inputTarefa")

    //Verifica se o usuário digitou uma tarefa válida
    if(inputTarefa.value == "" || inputTarefa.value == " "){ //Se o usuário tiver digitado burrice
        document.getElementById("mensagem").textContent = "Favor digitar uma tarefa válida!"
        inputTarefa.value = ""
    } else{//senão tiver digitado merda

        //Adiciona o valor que o usuário digitou, a variavel Tarefa
        let Tarefa = inputTarefa.value
        document.getElementById("mensagem").textContent = mensagem

        //Adiciona a variavel listaTarefas a ul(lista desordenada) do HTML
        let listaTarefas = document.getElementById("listaTarefas") 
        
        //Cria uma nova li(elemento da lista) do HTML
        let novaTarefa = document.createElement("li") // li do HTML

        //Adiciona o valor informado na variável Tarefa a nova li
        novaTarefa.textContent = Tarefa

        listaTarefas.appendChild(novaTarefa) //Adicionar o conteudo da tarefa dentro do novo li


        inputTarefa.value = "";
    }
}