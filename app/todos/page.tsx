import { getTodos } from '@/lib/prisma/todos';
import CreateTodo from '@/app/todos/createTodo';
import TodoList from '@/app/todos/todoList';

export default async function Page() {
  return (
    <div className="mt-8">
      <h1>Todo List</h1>
      <CreateTodo />
      <TodoList />
    </div>
  );
}
