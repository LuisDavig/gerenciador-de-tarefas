import React from "react";
import Tarefa from "./Tarefa";

const Tarefas = ({ListaTarefas}) => {
    return(
        <>
            { ListaTarefas.map(task => <Tarefa task={task} /> ) }
        </>
    );

};

export default Tarefas;