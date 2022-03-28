import './todo.css'
import Todolist_here from '../todo_list/todolist'
import TodoForm from '../todo_create/form'
import { useState } from 'react'

const Todo = () => {
    const [getTodos, setTodos] = useState([
        { id:1, title:'I'},
        { id:2, title:'Love'},
        { id:3, title:'You'},
    ], [])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }

    return (
        <div>
            <h3>
                My Simple To Do List
            </h3>
            {/* <Todolist_here /> */}
            <TodoForm onCreateTodo={eventCreateTodo} />
            <Todolist_here dataTodos={getTodos} />
        </div>
    )
}

export default Todo;