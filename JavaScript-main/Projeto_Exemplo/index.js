const btnAdicionarTask = document.getElementById('addButton')
//-----------------------------------------------------------//
function addTask(){

  //PEGAR VALOR DIGITADO NO CAMPO ADICIONAR TAREFA
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;
  console.log(taskText);

  if(taskText === ""){
    return null;
  }

    //PEGAR O ELEMENTO UL DO HTML
    const taskList = document.getElementById("taskList");

    //CRIAR O ELEMENTO LI PARA NOSSA UL
    const newTask = document.createElement("li");
    const taskTextNode = document.createTextNode(taskText)
    newTask.appendChild(taskTextNode);
    
    //ADICIONAR O LI DENTRO DA UL
    taskList.appendChild(newTask);

    taskInput.value = "";
    // console.log(taskList)

}
//-----------------------------------------------------------//
btnAdicionarTask.setAttribute('onclick', 'addTask()');