'use client';

import CreateTodo from '@/app/todos/createTodo';
import TodoList from '@/app/todos/todoList';
import { Todo as TodoType } from '@prisma/client';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface TodoListResponse {
  data: {
    data: TodoType[];
  };
}

export default function Page() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const { data }: TodoListResponse = await axios.get('/api/users/1/todos');
      setTodos(data.data);
    }
    fetchTodos();
  }, []);
  return (
    <div className="mx-auto mt-8 w-1/2">
      <h1 className="text-3xl">Todo List</h1>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}
