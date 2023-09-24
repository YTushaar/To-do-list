import React from 'react'
import Todo from '../Mycomponents/Todo';

const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"10px auto"
  }
  return (
    <div className="container"style={myStyle}>
        <h3 className="my-3">Todos List</h3>
        {props.todos.length===0? "No Todos to Display":
        props.todos.map((todo)=>{
             return <Todo todo={todo} onDelete={props.onDelete}/>
        })
        }
        
    </div>
  )
}

export default Todos
