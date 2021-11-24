import React, { useState } from "react";
import './App.css';
import Tarefas from "./components/Tarefas";

const App = () =>{

  const [ListaTarefas,setTarefas] = useState([
    {
      id: "1",
      title: "trabalho de grafos",
      completed: false,
    },
    {
      id: "2",
      title: "trabalho de FBD",
      completed: false,
    },
  ]);

  return(

    <div className = 'container'>
      <Tarefas ListaTarefas={ListaTarefas} />
    </div>

  );

}

export default App;