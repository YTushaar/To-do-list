import React, { useState, useEffect } from 'react';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
import AddTodo from './Mycomponents/AddTodo';

function App() {
  const storedTodos = localStorage.getItem('todos');
  const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];

  const [todos, setTodos] = useState(initialTodos);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.sno !== todo.sno));
  };

  const addTodo = (title, desc) => {
    const newTodo = {
      sno: todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1,
      title: title,
      desc: desc,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <>
      <Header title="My Todo List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;


