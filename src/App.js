import React, {useState} from 'react';
import FormTodo from './FormTodo';
import TodoList from './TodoList';
import './App.css'


const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if(!todo.title) return;
    const newTodo = [todo,...todos];
    setTodos(newTodo);
  }

  const removeTodo = (id) => {
    const newTodo = [...todos].filter(el => el.id !== id)
    setTodos(newTodo)

  }

  const doneTodo = (id) => {
    const newTodo = todos.map(el => {
      if(el.id === id) {
        el.done = !el.done
      }
      return el;
    })
    setTodos(newTodo);
  }

  return (
    <div>
      <h2>Add Todo</h2>
      <FormTodo addTodo={addTodo}/>
      {todos.length ? <TodoList todos={todos} removeTodo={removeTodo} doneTodo={doneTodo} />  : "No Todos"}
    </div>
  )
}

export default App
