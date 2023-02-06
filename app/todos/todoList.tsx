'use client';
import Todo from '@/app/todos/todo';
import { Todo as TodoType } from '@prisma/client';
interface Params {
  todos: TodoType[];
}

export default function TodoList({ todos }: Params) {
  return (
    <div className="mb-6 flex h-[28rem] flex-col overflow-auto rounded-xl bg-[#24273D]  scrollbar scrollbar-track-[#24273D] scrollbar-thumb-gray-500/40 scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl">
      {todos?.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
