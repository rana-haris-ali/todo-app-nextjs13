import { getTodos } from '@/lib/prisma/todos';
import Todo from './todo';
import CreateTodo from '@/app/todos/createTodo';

export default async function Page() {
  const { todos } = await getTodos(1);
  return (
    <div className="mt-8">
      <h1>Todo List</h1>
      <CreateTodo />
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
