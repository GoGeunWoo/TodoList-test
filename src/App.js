import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            {todo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
