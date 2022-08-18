import React from 'react'
import Todoitem from "./Todoitem"

const Todos = (props) => {
  return (
  <div className ="container" >
      <h3 className=" my-1 py-3">Todos list</h3>
     { props.todos.length===0?<div className= " text-center bg-dark text-light py-2 ">No items to display</div>:
      props.todos.map((todo)=>{
        return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        
      })
}
</div>
  )
}

export default Todos
