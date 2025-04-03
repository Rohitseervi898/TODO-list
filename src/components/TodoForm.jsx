import React from 'react'
import {useState} from 'react'

const TodoForm = ({addtodo}) => {
   
    const [task,setTask]=useState("");
    const AddTask=(e)=>{
        addtodo(task);
        setTask("");
    }
  return (
    <form onSubmit={AddTask}>
        <input type='text' placeholder='add task' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm