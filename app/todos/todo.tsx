import { Todo } from '@prisma/client';

export default function todo(params: { todo: Todo }) {
  return (
    <div className="border-b border-gray-500 p-3  last:border-b-0">
      <h1 className="font-semibold text-gray-300">{params.todo.title}</h1>
    </div>
  );
}
