import React, { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'


const Home = () => {
  const [task,setTask]=useState("");
  let [todos,setTodos]=useState(()=>{
    const savedTodos=JSON.parse(localStorage.getItem('todos'))
    return savedTodos|| []});
  console.log(todos);

  //this one is to get from local storage
  useEffect(()=>{
    const savedTodos=JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  },[]);
  //this one is to store in local storage
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  const addtodo=(task)=>{
    setTodos([...todos,{id:Date.now(),task:task,completed:false}]);
  }
  return (
    <div style={{width:'500px', height:'700px', margin:'auto', backgroundColor:'rgb(233, 233, 233)',borderRadius:'25px',boxShadow:'0 1px 7px 1px rgba(0,0,0,0.2)'}}>
        <h1 style={{fontSize:'21', fontWeight:'500', margin:'0 32.2%', padding:'10px'}}>TO-DO List</h1>
        <TodoForm addtodo={addtodo}/>
        <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default Home