import Input from "./components/Input";
import List from "./components/List";
import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, done: false }])
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const toogleTaskCompleted = (taskId) => {
    setTasks(tasks.map((task) => task.id === taskId ? { ...task, done: !task.done } : task))
  }

  return (
    <div className="bg-slate-100 w-full h-screen">
      <div className="max-w-7xl m-auto flex p-2 flex-col items-center justify-center">
        <h1 className="text-sky-900 text-4xl font-bold">LISTA DE TAREFAS</h1>
        <Input onAddTask={addTask} />
        <List tasks={tasks} onDeleteTask={deleteTask} onToogleTaskCompleted={toogleTaskCompleted} />
      </div>
    </div>
  )
}

export default App
