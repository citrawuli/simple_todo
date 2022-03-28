import './form.css'
import { useState } from 'react'

const TodoForm = (props) => {
    const [getInputTodo, setInputTodo] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const newTodo = {
            id: Math.floor(Math.random()*100) +1,
            // title: 'Learn React' Static and not binding
            title:getInputTodo //here is the binding
        }

        props.onCreateTodo(newTodo) 
        console.log(newTodo)
        setInputTodo('')

    }

    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
        console.log(getInputTodo)
    }
    return(
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" value={getInputTodo} onChange={handleInputTodo} />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;