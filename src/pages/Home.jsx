import React, { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'


const Home = () => {
  
  let [todos,setTodos]=useState(()=>{
    const savedTodos=JSON.parse(localStorage.getItem('todos'))
    return savedTodos|| []});
  console.log(todos);

  //this one is to store in local storage
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  //addtodo function to add a new todo
  const addtodo=(task)=>{
    setTodos([...todos,{id:Date.now(),task:task,completed:false}]);
  }

  //updatetodo function to update the todo
  const updatetodo=(id,newTask)=>{
    console.log(id,newTask);
    
    setTodos(todos.map((todo)=>(todo.id===id?{...todo,task:newTask}:todo)));
  }

  //deletetodo function to delete the todo
  const deletetodo=(id)=>{
    const newtodo=todos.filter((todo)=>todo.id!==id);
    setTodos(newtodo);
  }

  //ToggleCompleted function to toggle the completed status of the todo
  const ToggleCompleted=(id)=>{
    setTodos(todos.map((todo=>(todo.id===id?{...todo,completed:!todo.completed}:todo))));
  }


  return (
    <div style={{width:'500px', height:'700px', margin:'auto', backgroundColor:'rgb(233, 233, 233)',borderRadius:'25px',boxShadow:'0 1px 7px 1px rgba(0,0,0,0.2)'}}>
        <h1 style={{fontSize:'21', fontWeight:'500', margin:'0 32.2%', padding:'10px'}}>TO-DO List</h1>
        <TodoForm addtodo={addtodo}/>
        <div>
          {todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} deletetodo={deletetodo} updatetodo={updatetodo} ToggleCompleted={ToggleCompleted}/>
          ))}
        </div>
    </div>
  )
}

export default Home