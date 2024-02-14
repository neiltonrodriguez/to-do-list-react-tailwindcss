import { useState } from 'react'

const Input = ({onAddTask}) => {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim()) {
            onAddTask(input);
            setInput("")
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex gap-5 mt-10 w-full max-w-2xl">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 px-3 rounded-md text-slate-600" type="text" placeholder="digite sua tarefa"></input>
            <button type="submit" className="from-indigo-800 bg-gradient-to-r hover:to-indigo-700 to-indigo-950 gradien text-white px-5 py-2 rounded-md duration-200 ">Adicionar</button>
        </form>
    )
}

export default Input