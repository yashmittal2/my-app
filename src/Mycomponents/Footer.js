import React from 'react'

const footer = () => {
let foostyle ={
  position:"relative",
  top:"70vh",
  width:"100%"
}
  return (
    <footer className ="bg-dark text-light py-3" style={foostyle}>
    <p className="text-center">
      Copyright &copy; MyTodosList.com
    </p>
    </footer>
  )
}

export default footer
