import React from 'react'

const Footer = () => {
 let footerStyle={ 
  position:"relative",
  top:"70vh",
  width:"100%",
  border:"4px solid red"
}
  return (
    <div className="bg-dark text-light"style=
    {footerStyle}>
      <p className="text-center">
      Copyright &copy;MyTodoList
      </p>
    </div>
  )
}

export default Footer
