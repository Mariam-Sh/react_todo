import React from 'react'

const TodoList = ({todos, removeTodo, doneTodo}) => {

    return todos.map((todo,index) => (

        <div className={todo.done ? "Todo_done" : "Todo"} key={index}>
            <span>{todo.title}</span>
            <i className="fas fa-trash" onClick={()=> removeTodo(todo.id)}></i>
            <i className='fas fa-check' onClick={()=> doneTodo(todo.id)}></i>
        </div>
    ))

    

    
}

export default TodoList
