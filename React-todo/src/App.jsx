import React, { useState, useEffect } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-liner-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6 animate-bounce">
          ✨ Todo App
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 px-4 py-2 rounded-lg focus:outline-none"
          />
          <button
            onClick={addTodo}
            className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:scale-110 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md transform transition hover:scale-105"
            >
              <span
                onClick={() => toggleComplete(todo.id)}
                className={`cursor-pointer ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
