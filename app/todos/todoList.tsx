'use client';
import { useEffect, useState } from 'react';
import { Todo as TodoType } from '@prisma/client';
import Todo from '@/app/todos/todo';
import axios from 'axios';

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  interface TodoListResponse {
    data: {
      data: TodoType[];
    };
  }

  useEffect(() => {
    async function fetchTodos() {
      const { data }: TodoListResponse = await axios.get('/api/users/1/todos');
      setTodos(data.data);
    }
    fetchTodos();
  }, []);

  return (
    <div>
      {todos?.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
