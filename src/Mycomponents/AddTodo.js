import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Title or Description cannot be blank');
    }
    addTodo(title, desc);
  };

  return (<>
    <div className="container my-3">
      <h3>Add a new item</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="desc">Description</label>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">AddTodo</button><hr/>
      </form>
    </div>
    </>
  );
};

export default AddTodo;
