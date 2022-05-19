import React, { useState } from "react";
import "./App.css";
let globalId = 0;
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  function addtask(e) {
    e.preventDefault();
    setTodos((oldtodos) => {
      setTask("");
      return [...oldtodos, { mytask: task, id: globalId++ }];
    });
  }
  function deleteItem(delitem) {
    setTodos((old) => old.filter((item) => item.id !== delitem));
  }
  return (
    <div className="App">
      <h1>My Todo app</h1>
      <form onSubmit={addtask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          
        />
        <button type="submit" >
          add task
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo.id}>
              <li>
                {todo.mytask}
              </li>
              <button onClick={() => deleteItem(todo.id)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
