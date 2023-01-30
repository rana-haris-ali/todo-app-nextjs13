import { Todo } from '@prisma/client';

export default function todo(params: { todo: Todo }) {
  return (
    <div>
      <h1>{params.todo.title}</h1>
    </div>
  );
}
