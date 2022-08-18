import React from 'react'

const Todoitem = ({todo,onDelete}) => {
  let styler1={
    border:"1px solid black ", 
    padding:"2px 2px",
    margin:"2px",
    backgroundColor:'lightgreen'
  }
  return (
    <div style={styler1}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default Todoitem
