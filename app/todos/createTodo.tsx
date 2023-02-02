'use client';
import { useState } from 'react';
import axios from 'axios';
const apiPath = process.env.API_ROUTE;

export default function CreateTodo() {
  const [todo, setTodo] = useState('');

  const createTodoHandler = async (event: React.MouseEvent) => {
    const createdTodo = await axios.post('/api/users/1/todos', {
      title: todo,
      authorId: 1,
    });
  };
  return (
    <div>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        className="text-black"
      />
      <button onClick={createTodoHandler} className="bg-[#7B2869]">
        Add
      </button>
    </div>
  );
}
