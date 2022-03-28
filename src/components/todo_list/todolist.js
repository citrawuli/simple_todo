import './todolist.css'

const Todolist = (props) => {
    console.log(props)
    return(
        <div>
            <h1>STATIC</h1>
            <ul>
                <li>
                    Learn React
                </li>
                <li>
                    Build Tools
                </li>
                <li>
                    Record
                </li>
            </ul>

            <h1>PROPS PARENT TO CHILD ==DYNAMIC==</h1>
            <ul>
                {
                props.dataTodos.map((todo)=>{
                    //{id:1, title: 'I'}
                    return <li key={todo.id}>{todo.title}</li>
                })
                }
            </ul>
        </div>
        
    )
}

export default Todolist