import React from 'react'
import { useState } from 'react'


const list=()=>{
    const [ischecked,setIscheck]=useState(false);
    const [todos,setTodos]=useState([]);
    todolist.forEach(Element=>{
        <div>
            {todolist.map((element)=>(
              <div>
                <input type='checkbox' checked={ischecked} onChange={setIscheck(element.target.checked)} />
                <span>{element.task}</span>
              </div>  
            ))
            }
        </div>
    }
    )
}
const TodoItem = () => {
    
  return (
    <div>
        
    </div>
  )
}

export default TodoItem