import React from 'react'

const Task = ({task, onDelete, onToogle}) => {
    return (
        <li className="flex w-full h-10">
            <div className="px-5 rounded-md gap-3 border-b-2 border-slate-200 bg-white hover:bg-slate-100 duration-200 w-full flex items-center justify-between">
                <span onClick={onToogle} className="text-sky-800 w-full cursor-pointer font-semibold text-lg">{task.done ? (<span className="line-through text-green-600" >{task.text}</span>) : (<span>{task.text}</span>)}</span>
                <button onClick={onDelete} className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-800 hover:text-red-600 hover:scale-110 duration-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                </svg>
                </button>
            </div>

        </li>
    )
}

export default Task