'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import axios from 'axios';
import { Todo as TodoType } from '@prisma/client';

interface Params {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

interface CreateTodoResponse {
  data: {
    data: TodoType;
  };
}

export default function CreateTodo({ todos, setTodos }: Params) {
  const [todo, setTodo] = useState('');

  const createTodoHandler = async (event: React.MouseEvent) => {
    const {
      data: { data: createdTodo },
    }: CreateTodoResponse = await axios.post('/api/users/1/todos', {
      title: todo,
      authorId: 1,
    });
    setTodos([...todos, createdTodo]);
  };
  return (
    <div className="my-3 flex">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        className="w-[94%] rounded text-black"
      />
      <button
        onClick={createTodoHandler}
        className="ml-4 rounded bg-[#24273D] px-2 py-1 font-semibold"
      >
        ADD
      </button>
    </div>
  );
}
