import React from 'react'
import Task from './Task'

const List = ({ tasks, onDeleteTask, onToogleTaskCompleted }) => {
   if (tasks.length === 0 ){
       return <span className="text-slate-400 mt-10">sem tarefas!</span>
   }
    return (
        <div className="w-full max-w-2xl flex items-center justify-center flex-col gap-1 mt-10">
            {/* {tasks.length === 0 && <span className="text-slate-400">sem tarefas!</span>} */}
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} onToogle={() => onToogleTaskCompleted(task.id)}/>
            ))}
        </div>
    )
}

export default List