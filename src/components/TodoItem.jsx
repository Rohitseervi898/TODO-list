import React from "react";
import { useState } from "react";

const TodoItem = ({ todo, deletetodo, updatetodo,ToggleCompleted }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);


  const handleupdate = () => {
    updatetodo(todo.id, newTask);
    setIsEditing(false);
  };


  return (
    <div >
        <input type="checkbox" onClick={()=>ToggleCompleted(todo.id)}/>
        
        {isEditing ? (
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        ) : (
          <span style={todo.completed?{textDecoration:'line-through'}:{}}>{todo.task}</span>
        )}

      {isEditing ? (<button onClick={handleupdate}>Save</button>) : (<button onClick={() => setIsEditing(true)}>Edit</button>)}

      <button onClick={()=>deletetodo(todo.id)}>delete</button>
    
    </div>
  );
};

export default TodoItem;
