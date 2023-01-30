import Todo from './todo';
import { getTodos } from '@/lib/prisma/todos';

export default async function Page() {
  const { todos } = await getTodos(1);
  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
